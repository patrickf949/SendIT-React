import getParcelsReducer from "../../reducers/getParcelsReducer";
import { FETCH_PARCELS_SUCCESS } from "../../actions/types";
import { data } from "../mock_data/data";

describe("App", () => {
  const initialState = {
    parcels: []
  };
  it("Should handle reducers initial state", () => {
    const newState = getParcelsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should handle reducers after getting parcels", () => {
    const newState = getParcelsReducer(initialState, {
      type: FETCH_PARCELS_SUCCESS,
      payload: data.getParcels
    });
    expect(newState).toEqual({
      ...initialState,
      parcels: data.getParcels
    });
  });
});
