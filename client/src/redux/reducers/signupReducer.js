import * as types from "../actions/actionTypes";
import { loadUserFromLocal } from "../../utils/localStorage";
//
const persistedState = loadUserFromLocal();
const initialState = Object.assign(persistedState, { userInfo: {} });
//
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_ME_REQUEST:
      return {
        ...state
      };
    case types.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload
      };
    case types.AUTH_ME_FAILURE:
    case types.AUTH_LOOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
