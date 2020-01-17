import * as actionType from "../actions/actionTypes";
import { getToken } from "../../services/authService";

const initialState = {
  loading: false,
  data: [],
  error: "",
  updating: {},
  loggedIn: getToken() ? true : false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case actionType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        loggedIn: true
      };
    case actionType.FETCH_ADD:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      };
    case actionType.DELETE_ERROR:
      return {
        ...state,
        loading: false,
        data: [...action.payload.data],
        error: action.payload.error
      };

    case actionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        loggedIn: false
      };
    case actionType.UPDATE_REQUEST:
      return {
        ...state,
        updating: action.payload
      };
    case actionType.TOGGLE_AUTH:
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};

export default reducer;
