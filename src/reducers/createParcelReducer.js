import { PARCEL_SUCCESS, PARCEL_FAIL, PARCEL_STARTED } from "../actions/types";

const initialState = {
  parcel: {},
  errors: null,
  isProcessing: null,
  createParcelSuccess: false
};

const createParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARCEL_SUCCESS:
      return {
        ...state,
        parcel: action.payload,
        isProcessing: null,
        createParcelSuccess: true
      };

    case PARCEL_STARTED: {
      return {
        ...state,
        isProcessing: true
      };
    }

    case PARCEL_FAIL:
      return {
        ...state,
        errors: action.payload,
        isProcessing: null
      };
    default:
      return state;
  }
};
export default createParcelReducer;
