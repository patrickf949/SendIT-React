import React from "react";
import { shallow, mount } from "enzyme";
import Routes from "../../components/routes";
import Dashboard from "../../components/dashboard";
import { MemoryRouter } from "react-router";
import { Route } from "react-router-dom";
import ProtectedRoute from "../../components/protectedRoutes";

describe("routes using memory router", () => {
  beforeEach(() => {
    sessionStorage.setItem("Access_token", "random-string");
  });

  it("should show Home component for / router (using memory router)", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes />
      </MemoryRouter>
    );
    expect(component.find(Dashboard)).toHaveLength(0);
  });
});
