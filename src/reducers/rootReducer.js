import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  auth_login: loginReducer
});
