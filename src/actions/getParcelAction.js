import axios from "axios";
import { FETCH_PARCEL_SUCCESS } from "./types";
import endpoints from "../urls";
import { toast } from "react-toastify";

export const getParcelAction = parcelId => {
  return async dispatch => {
    try {
      console.log("enters catch");

      const response = await axios({
        url: endpoints.backend + "parcels/" + parcelId,
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("Access_token")}`
        }
      });
      console.log(response);
      dispatch(fetchParcelSuccess(response.data));
    } catch (error) {
      console.log("enters catch", error);
      const errors = error.response.data;
      for (var key in errors) {
        toast.error(`${key}: ${errors[key]}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          hideProgressBar: false
        });
      }
    }
  };
};
const fetchParcelSuccess = payload => {
  return {
    type: FETCH_PARCEL_SUCCESS,
    payload: payload
  };
};
