import React from "react";
import "../styles/login.scss";

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
      <form className="form-control" onSubmit={handleSubmit}>
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
        <input type="submit" className="btn btn-primary" value="Sign In" />
      </form>
    </div>
  );
};

export default Login;
