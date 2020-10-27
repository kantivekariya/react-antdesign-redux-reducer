import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { authReducer } from "./authReducer";
import { layoutReducer } from "./layoutReducer";
import { taxesReducer } from "./taxesReducer/taxesReducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Layout: layoutReducer,
  loadingBar: loadingBarReducer,
  taxesReducer
});

export default rootReducer;
