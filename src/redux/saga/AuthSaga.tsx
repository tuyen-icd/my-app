import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import Credentials from "../../repos/local/Credentials";
import { DO_LOGIN, DO_REGISTER, FAILURE } from "../actions/ActionTypes";

function* doLoginSaga(action) {
  console.log("PING");
  try {
    const url = "https://apingweb.com/api/login";
    const requestData = {
      email: action.userName,
      password: action.password,
    };

    fetch(url, {
      method: "POST",
      headers: new Headers({
        //  'Authorization': 'Basic ' + base64.encode("admin : 12345");   <-----  for Basic Auth (install base64)
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          action.callback && action.callback(null, result);
          if (result && result.success == true && result.status === 200) {
            console.log("PINGGO");
          }
          Credentials.saveToken(result.token);
        }
        console.log(result);
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.log("doLogin Error ===", error);
  }
}

function* registerSaga(action) {
  try {
    const url = "https://apingweb.com/api/register";
    const requestData = action.userData;
    fetch(url, {
      method: "POST",
      headers: new Headers({
        //  'Authorization': 'Basic ' + base64.encode("admin : 12345");   <-----  for Basic Auth (install base64)
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          action.callback && action.callback(null, result);
        }
      })
      .catch((error) => console.error(error));
  } catch (error) {
    console.log("error", error);
  }
}

function* authSaga() {
  yield all([
    takeLatest(DO_LOGIN, doLoginSaga),
    takeLatest(DO_REGISTER, registerSaga),
  ]);
}

export default authSaga;
