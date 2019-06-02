// This module handles state upon Registration
import { REGISTER_STARTED, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
  isSuccessful: false,
  token: "",
  errors: null,
  isProcessing: null,
  registerSuccess: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        token: action.payload,
        isProcessing: null,
        registerSuccess: true
      };

    case REGISTER_STARTED: {
      return {
        ...state,
        isProcessing: true
      };
    }

    case REGISTER_FAIL:
      return {
        ...state,
        errors: action.payload,
        isProcessing: null
      };
    default:
      return state;
  }
};
export default registerReducer;
