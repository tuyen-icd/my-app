import { combineReducers } from "redux";
import { CLEAR_APP_STATE } from "../actions/ActionTypes";
import ProductReducer from "./ProductReducer";

const appReducer = combineReducers({
  productReducer: ProductReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_APP_STATE) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
