import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";
import LoginContainer from "../containers/loginContainer";
import Header from "./header";
import Dashboard from "./dashboard";
import CreateParcelContainer from "../containers/createParcelContainer";
import GetParcel from "../components/getParcel";
import ProtectedRoute from "./protectedRoutes"

class Routes extends Component {
  render() {
    return (
      <div className="alldivs">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/login" component={LoginContainer} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/create-parcel" component={CreateParcelContainer} />
            <ProtectedRoute path="/parcels/:id" component={GetParcel} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
