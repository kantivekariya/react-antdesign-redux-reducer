import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { layoutReducer } from "./layoutReducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Layout: layoutReducer,
});

export default rootReducer;
