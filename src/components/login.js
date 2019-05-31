import React from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

const Login = props => {
  const {
    classes,
    password,
    username,
    handleChange,
    handleSubmit,
    isProcessing
  } = props;
  let Loader = require("react-loader");
  return (
    <div className="container">
      <form className="form-control form-container" onSubmit={handleSubmit}>
        <h3>Welcome back to SendIT</h3>
        <h4>Your package partner</h4>
        <input
          type="text"
          className="form-control text-field"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required={true}
        />
        <Loader loaded={!isProcessing} />
        <input
          type="password"
          className="form-control text-field"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <div>
          <input type="submit" className="btn btn-primary" value="Sign In" />
        </div>

        <div>
          Do not have an account?
          <Link to="/register"> Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
