import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";
import LoginContainer from "../containers/loginContainer";
import Header from "./header";
import Dashboard from "./dashboard";
import CreateParcelContainer from "../containers/createParcelContainer";
import GetParcel from "../components/getParcel";
import { ProtectedRoute, ProtectedAuthRoute } from "./protectedRoutes";

class Routes extends Component {
  render() {
    return (
      <div className="alldivs">
        <BrowserRouter>
          <Header />
          <Switch>
            <ProtectedAuthRoute exact path="/" component={Home} />
            <ProtectedAuthRoute
              path="/register"
              component={RegisterContainer}
            />
            <ProtectedAuthRoute path="/login" component={LoginContainer} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute
              path="/create-parcel"
              component={CreateParcelContainer}
            />
            <ProtectedRoute path="/parcels/:id" component={GetParcel} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
