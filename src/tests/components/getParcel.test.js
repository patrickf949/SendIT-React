import React from "react";
import { shallow } from "enzyme";
import GetParcel from "../../components/getParcel";

describe("GetParcel Component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<GetParcel />);
    expect(wrapper).toMatchSnapshot();
  });
});
