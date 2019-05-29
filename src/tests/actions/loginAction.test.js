import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import { LoginRequest } from "../../actions/loginAction";
import { LOGIN_SUCCESS, LOGIN_STARTED } from "../../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Login", () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it("should login successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          message: "Hello emma70 you are logged into SendIT"
        }
      });
    });
    const expectedAction = [
      {
        type: LOGIN_STARTED
      },
      {
        type: LOGIN_SUCCESS
      }
    ];
    const validData = {
      username: "emma70",
      password: "@bochiSupreme1"
    };

    return store.dispatch(LoginRequest(validData, { history: [] })).then(() => {
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
    const expectedAction = [{ type: "LOGIN_STARTED" }, { type: "LOGIN_FAIL" }];
    const invalidData = {
      username: "",
      password: ""
    };
    return store
      .dispatch(LoginRequest(invalidData, { history: [] }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
