import React, { Component } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div>&nbsp;</div>
          <h1>Welcome To SendIT!!</h1>
          <hr />
          <p>Your one stop buddy for parcel delivery</p>
          <div id="lists">
            <li>E-commerce</li>
            <li>Pizza</li>
            <li>Old things</li>
            <li>Whatever!!</li>
          </div>
          <p>Register with us for safe and timely delivery</p>

          <p>
            SendIT is a courier service that helps users deliver parcels to
            different destinations. SendIT provides courier quotes based on
            weight categories.
          </p>
          <div>
            <Link to="/login">
              <button> Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
