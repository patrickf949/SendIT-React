import React from "react";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import moxios from "moxios";
import thunk from "redux-thunk";
import {
  CreateParcelContainer,
  mapStateToProps
} from "../../containers/createParcelContainer";

describe("Create component container", () => {
  const initialState = {
    parcel_create: { isSuccesfull: false, token: "", errors: null }
  };
  const props = {
    history: { push: jest.fn() }
  };
  const nextProps = {
    loginSuccess: true
  };
  const mockFn = jest.fn();
  const mockStore = configureStore([thunk]);
  let wrapper;

  beforeEach(() => {
    // store = mockStore(initialState);
    moxios.install();
    wrapper = shallow(
      <CreateParcelContainer open={false} close={mockFn} {...props} />
    );
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle the onSubmit event", () => {
    const props = {
      parcelCreateAction: jest.fn()
    };
    let wrapper = shallow(<CreateParcelContainer {...props} />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "",
        value: "bangy"
      }
    };
    event.preventDefault = jest.fn();
    instance.handleSubmit(event);
    expect(instance.state.errors.username).toEqual();
  });

  it("should mapStateToProps", () => {
    const state = {
      parcel_create: { isProcessing: false }
    };
    expect(mapStateToProps(state)).toEqual({ isProcessing: false });
  });
  it("should not redirect on failed login", () => {
    wrapper.setProps({ loginSuccess: false });

    expect(props.history.push).toBeCalledTimes(0);
  });
});
