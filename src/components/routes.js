import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home";
import RegisterContainer from "../containers/registerContainer";
import LoginContainer from "../containers/loginContainer";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
