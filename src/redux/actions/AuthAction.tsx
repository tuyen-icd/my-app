import { DO_LOGIN, DO_REGISTER, FAILURE, SUCCESS } from "./ActionTypes";

export const doRegisterAction = (userData, callback = (error, data) => {}) => {
  return {
    type: DO_REGISTER,
    userData: userData,
    callback,
  };
};

export const doLoginAction = (
  userName,
  password,
  callback = (error, data) => {}
) => ({
  type: DO_LOGIN,
  userName: userName,
  password: password,
  callback,
});
