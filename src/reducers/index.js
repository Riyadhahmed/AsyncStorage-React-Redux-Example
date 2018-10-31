import { combineReducers } from "redux";
import helloReducers from "./helloReducer";
import serverUserReducer from "./serverUserReducer";
import localUserReducer from "./localUserReducer";

export default combineReducers({
  hello: helloReducers,
  serverUser: serverUserReducer,
  localUser: localUserReducer,
});
