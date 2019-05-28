import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  }
});
