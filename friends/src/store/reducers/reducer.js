import * as actionType from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case actionType.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
