import React, { BrowserRouter } from "react";
import { shallow } from "enzyme";
import Login from "../../components/login";

describe("Login component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
