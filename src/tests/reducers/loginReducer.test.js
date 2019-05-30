import { LOGIN_STARTED, LOGIN_FAIL, LOGIN_SUCCESS } from "../../actions/types";
import loginReducer from "../../reducers/loginReducer";

describe("Login Reducer Tests", () => {
  const initialState = {
    isSuccessful: false,
    loginSuccess: false,
    token: "",
    errors: null,
    isProcessing: null
  };

  const dispatchedAction = {
    type: LOGIN_SUCCESS,
    payload: {
      username: "patrickfitz",
      token: "random-token"
    }
  };

  const newState = {
    isSuccessful: true,
    loginSuccess: true,
    token: {
      username: "patrickfitz",
      token: "random-token"
    },
    errors: null,
    isProcessing: null
  };

  it("should successfully login", () => {
    expect(loginReducer(initialState, dispatchedAction)).toEqual(newState);
  });
  it("should handle login failure", () => {
    const failAction = {
      type: LOGIN_FAIL,
      payload: {}
    };

    const failState = {
      isProcessing: null,
      isSuccessful: false,
      loginSuccess: false,
      errors: {},
      token: ""
    };
    expect(loginReducer(initialState, failAction)).toEqual(failState);
  });
  it("should handle login start", () => {
    const startAction = {
      type: LOGIN_STARTED,
      payload: {}
    };

    const startState = {
      isProcessing: true,
      isSuccessful: false,
      loginSuccess: false,
      errors: null,
      token: ""
    };
    expect(loginReducer(initialState, startAction)).toEqual(startState);
  });
  it("should handle initial state", () => {
    const noAction = {
      type: "",
      payload: {}
    };
    expect(loginReducer(initialState, noAction)).toEqual(initialState);
  });
});
