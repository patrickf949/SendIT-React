import React, { Component } from "react";
import "../styles/home.scss";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import Logo from "../styles/images/sendIt.png";
import Profile from "../styles/images/avatar.png";

class Header extends Component {
  logout() {
    sessionStorage.clear();
    window.location.href = "/";
  }
  render() {
    let sessionUser = sessionStorage.getItem("Access_token");
    let dashboard = sessionUser ? "/dashboard" : "/";

    return (
      <div className="navi">
        <div className="left">
          <Link to={dashboard}>
            <img src={Logo} />
            <span>endIT</span>
          </Link>
        </div>
        {sessionUser ? (
          <div className="dropdown top-right">
            <div className="dropbtn">
              <img src={Profile} className="profile" />
            </div>
            <div className="dropdown-content">
              <Link className="navlink" to="/create-parcel">
                Create Parcel
              </Link>
              <Link className="navlink" to="/dashboard">
                Your Parcel Delivery Orders
              </Link>
              <a href="/" className="navlink" onClick={this.logout}>
                Log out
              </a>
            </div>
          </div>
        ) : (
          <div className="right">
            <div>
              <Link to="/register">Sign Up</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
