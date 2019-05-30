import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { RegisterRequest } from "../../actions/registerAction";
import { REGISTER_STARTED, REGISTER_SUCCESS } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Register", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("should register successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          message: "hello! emma70 Your Account has been created. Please login"
        }
      });
    });
    const expectedAction = [
      {
        type: REGISTER_STARTED
      },
      {
        type: REGISTER_SUCCESS,
        payload: "hello! emma70 Your Account has been created. Please login"
      }
    ];
    const validData = {
      username: "emma70",
      password: "@bochiSupreme1",
      contact: "029343013"
    };

    return store
      .dispatch(RegisterRequest(validData, { history: [] }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it("returns error message on login failure", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 400,
        response: {
          message: "invalid username or password"
        }
      });
    });
    const expectedAction = [
      { type: "REGISTER_STARTED" },
      { type: "REGISTER_FAIL" }
    ];
    const invalidData = {
      username: "",
      password: ""
    };
    return store
      .dispatch(RegisterRequest(invalidData, { history: [] }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
