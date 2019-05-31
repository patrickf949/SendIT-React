import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./authReducer";
import createParcelReducer from "./createParcelReducer";
import getParcelReducer from "./getParcelReducer";
import getParcelsReducer from "./getParcelsReducer";

export const rootReducer = combineReducers({
  auth_login: loginReducer,
  auth_register: registerReducer,
  parcel_create: createParcelReducer,
  get_parcel: getParcelReducer,
  get_parcels: getParcelsReducer
});
