import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./authReducer";

export const rootReducer = combineReducers({
  auth_login: loginReducer,
  auth_register: registerReducer
});
