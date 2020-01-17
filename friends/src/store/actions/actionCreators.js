import axios from "axios";
import * as actionType from "./actionTypes";
import {
  axiosAuth,
  setToken,
  removeToken,
  apiEndpoint
} from "../../services/authService";

export const fetchRequest = () => {
  return {
    type: actionType.FETCH_REQUEST
  };
};

export const fetchSuccess = data => {
  return {
    type: actionType.FETCH_SUCCESS,
    payload: data
  };
};

export const fetchError = error => {
  return {
    type: actionType.FETCH_ERROR,
    payload: error
  };
};

export const toggleAuth = () => {
  return {
    type: actionType.TOGGLE_AUTH
  };
};

export const login = credentials => {
  return async dispatch => {
    dispatch(fetchRequest());

    try {
      const { data } = await axios.post(`${apiEndpoint}/login`, credentials);
      setToken(data.payload);
      dispatch(toggleAuth());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const getFriends = id => {
  return dispatch => {
    dispatch(fetchRequest(id));

    axiosAuth()
      .get(id ? `/friends/${id}` : `/friends`)
      // .get(`/friends/`)
      .then(res => {
        dispatch(fetchSuccess(id ? [res.data] : res.data));
        console.log(res);
      })
      .catch(error => {
        console.log("ERROR", error.message);
        dispatch(fetchError(error.message));
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(fetchRequest());

    try {
      removeToken();
      dispatch(toggleAuth());
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

// ADD
export const addFriends = payload => {
  return dispatch => {
    dispatch(fetchRequest());

    axiosAuth()
      .post(`/friends`, payload)
      .then(res => {
        console.log("ADD", res);
        // dispatch(fetchAdd(payload))
      })
      .catch(error => dispatch(fetchError(error.message)));
  };
};

// DELETE

export const deleteError = (data, error) => {
  return {
    type: actionType.DELETE_ERROR,
    payload: { data, error }
  };
};

export const fetchDelete = id => {
  return async (dispatch, getState) => {
    // REMOVE FROM STATE

    // 1. Make copy of state
    await dispatch(fetchRequest());
    const originalState = [...getState().data];

    // 2. Filter through specific user
    const newState = [...getState().data].filter(data => data.id !== id);

    // 4. Update State
    await dispatch(fetchSuccess(newState));

    // REMOVE FROM SERVER

    // 1. axios.delete call with new state
    // 2. if that doesnt work, revert back to copy of OG state
    try {
      await axiosAuth().delete(`/friends/${id}`);
    } catch (error) {
      await dispatch(deleteError(originalState, error.message));
    }
  };
};

// UPDATE
export const updateRequest = (id, data) => {
  return async dispatch => {
    await dispatch(fetchRequest());

    try {
      const { data: users } = await axiosAuth().put(`/friends/${id}`, data);
      dispatch(fetchSuccess(users));
    } catch (error) {
      await dispatch(fetchError(error.message));
    }
  };
};
