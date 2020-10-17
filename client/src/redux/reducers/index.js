import { combineReducers } from "redux";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { authReducer } from "./authReducer";
import { layoutReducer } from "./layoutReducer";

const rootReducer = combineReducers({
  Auth: authReducer,
  Layout: layoutReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
