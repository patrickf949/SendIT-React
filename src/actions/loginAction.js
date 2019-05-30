import axios from "axios";
import endpoints from "../urls";
import { toast } from "react-toastify";

import { LOGIN_STARTED, LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

export const successLogin = data => {
  return {
    type: LOGIN_SUCCESS,
    payload: data.data.token
  };
};

export const LoginRequest = (userInfo, props) => async dispatch => {
  toast.dismiss();
  dispatch({
    type: LOGIN_STARTED
  });
  try {
    const response = await axios.post(
      endpoints.backend + "auth/login",
      userInfo
    );
    dispatch(successLogin(response));
    sessionStorage.setItem("Access_token", response.data.Access_token);
    toast.success(`${response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onClose: (window.location.href = "/dashboard")
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL
    });
    const message = error.response.data.message;

    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onclose: props.history.push("/login")
    });
  }
};
