import React, { BrowserRouter } from "react";
import { shallow } from "enzyme";
import CreateParcel from "../../components/createParcel";

describe("Dashboard", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CreateParcel />);
    expect(wrapper).toMatchSnapshot();
  });
});
