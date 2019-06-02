import React, { BrowserRouter } from "react";
import { shallow } from "enzyme";
import {
  mapStateToProps,
  Dashboard as GetParcels
} from "../../components/dashboard";
import { data } from "../mock_data/data";

describe("Dashboard", () => {
  const props = {
    history: {
      push: jest.fn()
    },
    getParcelsAction: jest.fn(),
    goToParcel: jest.fn(),
    parcels: data.getParcels
  };
  const props1 = {
    getParcelsAction: jest.fn(),
    parcels: { message: "" }
  };
  it("should render without crashing", () => {
    const wrapper = shallow(<GetParcels {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without crashing when there are no parcels", () => {
    const wrapper = shallow(<GetParcels {...props1} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should tests mapstateToprops", () => {
    const state = {
      get_parcels: { parcels: data.getParcels }
    };
    expect(mapStateToProps(state)).toEqual({
      parcels: data.getParcels
    });
  });
  it("should simulate onclick for table row", () => {
    const wrapper = shallow(<GetParcels {...props} />);
    wrapper
      .find("tr")
      .at(1)
      .simulate("click");

    expect(props.goToParcel).toHaveBeenCalledTimes(0);
  });
});
