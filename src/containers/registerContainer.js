import React, { Component } from "react";
import { connect } from "react-redux";
import Register from "../components/register";
import { RegisterRequest } from "../actions/registerAction";

export class RegisterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      contact: "",
      username: "",
      password: "",
      isLoading: false,
      errors: {
        username: "",
        password: "",
        email: "",
        contact: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { username, password, contact, email } = this.state;
    const data = {
      username: username,
      password: password,
      contact: contact,
      email: email
    };
    this.props.RegisterRequest(data, this.props);
  }

  render() {
    return (
      <Register
        handleChange={this.handleChange}
        username={this.state.username}
        contact={this.state.contact}
        email={this.state.email}
        isProcessing={this.props.isProcessing}
        password={this.state.password}
        errors={this.state.errors}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export const mapStateToProps = state => ({
  isProcessing: state.auth_register.isProcessing,
  registerSuccess: state.auth_register.registerSuccess
});

export default connect(
  mapStateToProps,
  { RegisterRequest }
)(RegisterContainer);
