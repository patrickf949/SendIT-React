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
        <h3>Welcome to SendIT</h3>
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
          type="text"
          className="form-control text-field"
          name="contact"
          placeholder="contact"
          onChange={handleChange}
          required={true}
          pattern="^!*([0-9]!*){10,15}$"
          title="Contact should have atleast 10 digits and atmost 15 digits"
        />

        <input
          type="password"
          className="form-control text-field"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required={true}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){8,}"
          title={
            "Password should have atleast 8 characters, 1 uppercase and 1 lowercase character" +
            "1 number and one special character"
          }
        />
        <div>
          <input type="submit" className="btn btn-primary" value="Sign Up" />
        </div>
        <span>Already have an account?</span>

        <Link to="/login"> Sign In</Link>
      </form>
    </div>
  );
};

export default Register;
