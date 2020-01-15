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

export const login = credentials => {
  return async dispatch => {
    dispatch(fetchRequest());

    try {
      const { data } = await axios.post(`${apiEndpoint}/login`, credentials);
      setToken(data.payload);
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const getFriends = id => {
  return dispatch => {
    dispatch(fetchRequest());

    try {
      axiosAuth()
        .get(`/friends/?id=${id}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        });
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(fetchRequest());

    try {
      removeToken();
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

// ADD

// DELETE

// UPDATE
