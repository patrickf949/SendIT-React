import createParcelReducer from "../../reducers/createParcelReducer";
import {
  PARCEL_SUCCESS,
  PARCEL_STARTED,
  PARCEL_FAIL
} from "../../actions/types";
import { data } from "../mock_data/data";

describe("Create Parcel", () => {
  const initialState = {
    isProcessing: null,
    createParcelSuccess: false,
    errors: null,
    parcel: {}
  };
  it("Should handle reducers initial state", () => {
    const newState = createParcelReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should handle reducers after creating parcel", () => {
    const newState = createParcelReducer(initialState, {
      type: PARCEL_SUCCESS,
      isProcessing: null,
      createParcelSuccess: true,
      parcel: undefined
    });
    expect(newState).toEqual({
      ...initialState,
      createParcelSuccess: true,
      isProcessing: null,
      parcel: undefined,
      createParcelSuccess: true
    });
  });
  it("Should handle reducers when starting parcel create", () => {
    const newState = createParcelReducer(initialState, {
      type: PARCEL_STARTED,
      isProcessing: true
    });
    expect(newState).toEqual({
      ...initialState,
      isProcessing: true
    });
  });
  it("Should handle reducers parcel create failure", () => {
    const newState = createParcelReducer(initialState, {
      type: PARCEL_FAIL,
      isProcessing: null,
      errors: undefined
    });
    expect(newState).toEqual({
      ...initialState,
      isProcessing: null,
      errors: undefined
    });
  });
});
