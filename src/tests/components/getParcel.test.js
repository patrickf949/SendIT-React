import React from "react";
import { shallow } from "enzyme";
import {
  mapStateToProps,
  GetParcel as OneParcel
} from "../../components/getParcel";
import { data } from "../mock_data/data";

describe("GetParcel Component", () => {
  const props = {
    match: {
      params: {
        id: "21"
      }
    },
    getParcelAction: jest.fn(),

    parcel: data.parcel
  };
  const props1 = props;
  props1.parcel = { message: "no parcel" };
  it("should render without crashing", () => {
    const wrapper = shallow(<OneParcel {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should render without crashing if parcel don't exist", () => {
    const wrapper = shallow(<OneParcel {...props1} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should tests mapstateToprops", () => {
    const state = {
      get_parcel: { parcel: data.parcel }
    };
    expect(mapStateToProps(state)).toEqual({
      parcel: data.parcel
    });
  });
  it("should receive props", () => {
    const wrapper = shallow(<OneParcel {...props} />);

    wrapper.instance().componentDidMount();
    expect(wrapper).toMatchSnapshot();
  });
});
