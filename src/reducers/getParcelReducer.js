import { FETCH_PARCEL_SUCCESS } from "../actions/types";

const initialState = {
  parcel: {},
  likes: 0,
  dislikes: 0
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
