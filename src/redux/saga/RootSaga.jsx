import {all, fork} from "redux-saga/effects"
import productSaga from "./ProductSaga";

export function* rootSaga() {
    yield all([
        fork(productSaga)])
    }