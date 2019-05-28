import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/home.scss";

class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Welcome to SendIT</h1>
        </div>
      </Provider>
    );
  }
}

export default Home;
