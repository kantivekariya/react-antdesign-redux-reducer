import axios from "axios";
import jwt_decode from "jwt-decode";
import * as types from "../actionType";
import config from "../../../config/Config";
import { getLocalState, setLocalState } from "../../../utils/localStorage";

// SignUp
export function userSignup(params) {
  console.log(params);
  return async dispatch => {
    dispatch({ type: types.AUTH_SIGNUP_REQUEST });
    try {
      const res = await axios.post(`${config.BASE_URL}/register`, params);
      dispatch({ type: types.AUTH_SIGNUP_SUCCESS, payload: res });
      return res;
    } catch (error) {
      dispatch({ type: types.AUTH_SIGNUP_FAILURE });
      return Promise.reject(error);
    }
  };
}

// Login
export function userLogin(params) {
  return async dispatch => {
    dispatch({ type: types.AUTH_LOGIN_REQUEST });
    try {
      const res = await axios.post(`${config.BASE_URL}/login`, params);
      console.log("res", res);
      const decoded = jwt_decode(res.data.token);
      // console.log('decoded', decoded);
      saveTokens({ access_token: res.token, expires_in: decoded.exp });
      dispatch({ type: types.AUTH_LOGIN_SUCCESS, payload: decoded });
      return res;
    } catch (error) {
      dispatch({ type: types.AUTH_LOGIN_FAILURE });
      return Promise.reject(error);
    }
  };
}

export function saveTokens(params) {
  console.log("saveTokens params", params);
  const { access_token, expires_in } = params;
  const expires_at = new Date();
  expires_at.setSeconds(expires_at.getSeconds() + expires_in);
  setLocalState("expires_in", expires_in);
  setLocalState("expires_at", expires_at.getTime());
  setLocalState("access_token", access_token);
}
