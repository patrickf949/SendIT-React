import React from "react";
import {shallow} from "enzyme";
import Register from "../../components/register";

describe("Register component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).toMatchSnapshot();
  });
});
