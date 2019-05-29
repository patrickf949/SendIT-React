import React from "react";
import renderer from "react-test-renderer";
import Login from "../../components/login";

describe("Login component", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<Login />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
