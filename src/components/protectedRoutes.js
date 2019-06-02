import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";

/* istanbul ignore next */
export const Authenticate = token => {
  try {
    const res = decode(token);
    if (res.exp > Date.now() / 1000) {
      return { res };
    }
    return false;
  } catch (error) {
    return false;
  }
};

/* istanbul ignore next */
const isLoggedIn = Authenticate(sessionStorage.getItem("Access_token"));
/* istanbul ignore next */
export const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

/* istanbul ignore next */
export const ProtectedAuthRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};
