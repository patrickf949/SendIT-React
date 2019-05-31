import React, { BrowserRouter } from "react";
import { shallow } from "enzyme";
import Dashboard from "../../components/dashboard";

describe("Dashboard", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
