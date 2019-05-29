import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import "../styles/home.scss";
import Routes from "../components/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    );
  }
}

export default App;
