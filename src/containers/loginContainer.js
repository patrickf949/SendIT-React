import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/login";
import { LoginRequest } from "../actions/loginAction";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoading: false,
      errors: {
        username: "",
        password: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess === true) {
      const { history } = this.props;

      history.push("/");
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      errors: {
        username: "The username is required"
      }
    });
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.LoginRequest(data, this.props);
  }

  render() {
    return (
      <Login
        handleChange={this.handleChange}
        username={this.state.username}
        isProcessing={this.props.isProcessing}
        password={this.state.password}
        errors={this.state.errors}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export const mapStateToProps = state => ({
  isProcessing: state.auth_login.isProcessing,
  loginSuccess: state.auth_login.loginSuccess
});

export default connect(
  mapStateToProps,
  { LoginRequest }
)(LoginContainer);
