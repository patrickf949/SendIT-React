import getParcelReducer from "../../reducers/getParcelReducer";
import { FETCH_PARCEL_SUCCESS } from "../../actions/types";

describe("getParcelReducer", () => {
  const initialState = {
    parcel: {}
  };
  it("Should handle reducers initial state", () => {
    const newState = getParcelReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should successfully fetch parcel", () => {
    const dispatchedAction = {
      type: FETCH_PARCEL_SUCCESS,
      payload: {
        Parcel: {},
        message: "message"
      }
    };
    const newState = {
      parcel: {
        Parcel: {},
        message: "message"
      }
    };

    expect(getParcelReducer(initialState, dispatchedAction)).toEqual(newState);
  });
});
