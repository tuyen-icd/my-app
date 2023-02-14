import {
  DO_LOGIN,
  DO_REGISTER,
  FAILURE,
  SUCCESS,
} from "../actions/ActionTypes";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DO_LOGIN:
      return {
        ...state,
        pending: true,
        data: null,
        error: null,
      };
    case DO_LOGIN + SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
        error: null,
      };
    case DO_LOGIN + FAILURE:
      return {
        ...state,
        pending: false,
        data: null,
        error: action.payload,
      };
    case DO_REGISTER:
      return {
        ...state,
        pending: true,
        data: null,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
