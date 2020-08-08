import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  Auth: authReducer
});

export default rootReducer;
