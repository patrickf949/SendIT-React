import {
  REGISTER_STARTED,
  REGISTER_FAIL,
  REGISTER_SUCCESS
} from "../../actions/types";
import registerReducer from "../../reducers/authReducer";

describe("Login Reducer Tests", () => {
  const initialState = {
    isSuccessful: false,
    registerSuccess: false,
    token: "",
    errors: null,
    isProcessing: null
  };

  const dispatchedAction = {
    type: REGISTER_SUCCESS,
    payload: {
      username: "patrickfitz",
      token: "random-token"
    }
  };

  const newState = {
    isSuccessful: true,
    registerSuccess: true,
    token: {
      username: "patrickfitz",
      token: "random-token"
    },
    errors: null,
    isProcessing: null
  };

  it("should successfully register", () => {
    expect(registerReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it("should handle register failure", () => {
    const failAction = {
      type: REGISTER_FAIL,
      payload: {}
    };

    const failState = {
      isProcessing: null,
      isSuccessful: false,
      registerSuccess: false,
      errors: {},
      token: ""
    };
    expect(registerReducer(initialState, failAction)).toEqual(failState);
  });
  it("should handle register start", () => {
    const startAction = {
      type: REGISTER_STARTED,
      payload: {}
    };

    const startState = {
      isProcessing: true,
      isSuccessful: false,
      registerSuccess: false,
      errors: null,
      token: ""
    };
    expect(registerReducer(initialState, startAction)).toEqual(startState);
  });
  it("should handle initial state", () => {
    const noAction = {
      type: "",
      payload: {}
    };
    expect(registerReducer(initialState, noAction)).toEqual(initialState);
  });
});
