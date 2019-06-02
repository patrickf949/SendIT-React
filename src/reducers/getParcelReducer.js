import { FETCH_PARCEL_SUCCESS } from "../actions/types";

const initialState = {
  parcel: {}
};

const getParcelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARCEL_SUCCESS:
      return {
        ...state,
        parcel: action.payload
      };
    default:
      return state;
  }
};

export default getParcelReducer;
