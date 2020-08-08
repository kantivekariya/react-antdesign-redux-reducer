import axios from "axios";
import * as types from "../actionType";
import config from "../../../config/Config";

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
