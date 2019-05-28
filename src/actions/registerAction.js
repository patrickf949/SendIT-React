import axios from "axios";
import endpoints from "../urls";
import { toast } from "react-toastify";

import { REGISTER_STARTED, REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

export const successRegister = data => {
  return {
    type: REGISTER_SUCCESS,
    payload: data.message
  };
};

export const RegisterRequest = (userInfo, props) => async dispatch => {
  toast.dismiss();
  dispatch({
    type: REGISTER_STARTED
  });
  try {
    const response = await axios.post(
      endpoints.backend + "auth/signup",
      userInfo
    );
    dispatch(successRegister(response.data));
    toast.success(`${response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onClose: props.history.push("/login")
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
    const message = error.response.data.message;

    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      hideProgressBar: false,
      onclose: props.history.push("/register")
    });
  }
};
