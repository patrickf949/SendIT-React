import { FETCH_PARCELS_SUCCESS } from "../actions/types";

const initialState = {
  parcels: []
};

const getParcelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARCELS_SUCCESS:
      return {
        ...state,
        parcels: action.payload
      };
    default:
      return state;
  }
};

export default getParcelsReducer;
