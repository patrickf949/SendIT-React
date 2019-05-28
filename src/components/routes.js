import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home";
import Register from "./register";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    );
  }
}

export default Routes;
