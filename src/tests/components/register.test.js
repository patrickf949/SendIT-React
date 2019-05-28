import React from "react";
import renderer from "react-test-renderer";
import Register from "../../components/register";

describe("Register component", () => {
  it("should render without crashing", () => {
    const wrapper = renderer.create(<Register />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
