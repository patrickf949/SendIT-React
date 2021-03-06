import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import moxios from "moxios";
import thunk from "redux-thunk";
import {
  LoginContainer,
  mapStateToProps
} from "../../containers/loginContainer";

describe("login container", () => {
  const initialState = {
    login: { isSuccesfull: false, token: "", errors: null }
  };
  const props = {
    history: { push: jest.fn() }
  };

  const nextProps = {
    loginSuccess: true
  };
  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
    wrapper = shallow(
      <LoginContainer open={false} close={mockFn} {...props} />
    );
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should handle the onChange event", () => {
    const event = {
      target: {
        name: "password",
        value: "papa232"
      }
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().state.password).toBe("papa232");
  });

  it("should handle the onSubmit event", () => {
    const props = {
      LoginRequest: jest.fn()
    };
    let wrapper = shallow(<LoginContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "",
        value: "bangy"
      }
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
    expect(instance.state.errors.username).toEqual("The username is required");
  });

  it("should mapStateToProps", () => {
    const state = {
      auth_login: { isProcessing: false }
    };
    expect(mapStateToProps(state)).toEqual({ isProcessing: false });
  });
  it("should not redirect on failed login", () => {
    wrapper.setProps({ loginSuccess: false });

    expect(props.history.push).toBeCalledTimes(0);
  });

  it("should redirect on successful login", () => {
    wrapper.setProps({ ...nextProps });

    expect(props.history.push).toBeCalledWith("/");
  });
});
