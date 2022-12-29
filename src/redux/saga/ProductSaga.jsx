import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_PRODUCTS, SUCCESS } from "../actions/ActionTypes";
import { getProductFailure, getProductSuccess } from "../actions/ProductAction";

function* getUserSaga(action) {
  const { dataProduct } = action.payload;

  yield put(getProductSuccess({ dataProduct }));
}

function* productSaga() {
  yield all([takeLatest(GET_PRODUCTS, getUserSaga)]);
}

export default productSaga;
