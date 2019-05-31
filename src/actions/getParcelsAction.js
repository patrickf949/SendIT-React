import axios from "axios";
import { FETCH_PARCELS_SUCCESS } from "./types";
import endpoints from "../urls";
import { toast } from "react-toastify";

export const getParcelsAction = () => {
  return async dispatch => {
    try {
      const response = await axios({
        url: endpoints.backend + "parcels",
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("Access_token")}`
        }
      });
      dispatch(fetchParcelsSuccess(response.data));
    } catch (error) {
      const errors = error.response.data;
      for (var key in errors) {
        toast.error(`${key}: ${errors[key]}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          hideProgressBar: false
        });
      }
    }
  };
};

const fetchParcelsSuccess = payload => {
  return {
    type: FETCH_PARCELS_SUCCESS,
    payload: payload
  };
};
