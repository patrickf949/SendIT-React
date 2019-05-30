import { PARCEL_SUCCESS, PARCEL_FAIL, PARCEL_STARTED } from "../actions/types";

const initialState = {
  isSuccessful: false,
  token: "",
  errors: null,
  isProcessing: null,
  createArticleSuccess: false
};

const createParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARCEL_SUCCESS:
      return {
        ...state,
        isSuccessful: true,
        token: action.payload,
        isProcessing: null,
        createArticleSuccess: true
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
