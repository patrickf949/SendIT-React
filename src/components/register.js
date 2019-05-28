import React from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";

const Register = props => {
  const {
    classes,
    password,
    contact,
    email,
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
        <input
          type="email"
          className="form-control text-field"
          name="email"
          placeholder="email"
          onChange={handleChange}
          required={true}
        />
        <Loader loaded={!isProcessing} />
        <input
          type="number"
          className="form-control text-field"
          name="contact"
          placeholder="contact"
          onChange={handleChange}
          required={true}
        />

        <input
          type="password"
          className="form-control text-field"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required={true}
          pattern="^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$"
          title={
            "Password should have atleast 8 characters, 1 number and one special character"
          }
        />
        <input type="submit" className="btn btn-primary" value="Sign Up" />
        <span>Already have an account?</span>
        <Link to="/login"> Sign In</Link>
      </form>
    </div>
  );
};

export default Register;
