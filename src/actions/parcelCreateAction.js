import axios from "axios";
import { PARCEL_SUCCESS, PARCEL_FAIL, PARCEL_STARTED } from "./types";
import { toast } from "react-toastify";
import endpoints from "../urls";

export const successCreateParcel = data => {
  return {
    type: PARCEL_SUCCESS,
    payload: data
  };
};

export const parcelCreateAction = (parcel, props) => {
  return async dispatch => {
    try {
      dispatch({
        type: PARCEL_STARTED
      });
      const response = await axios({
        url: endpoints.backend + "parcels",
        method: "POST",
        data: parcel,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("Access_token")}`
        }
      });

      dispatch(successCreateParcel(response.data));
      toast.dismiss();
      toast.success(`${response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
        onClose: props.history.push(
          "/parcels/" + response.data.Parcel.parcel_id
        )
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: PARCEL_FAIL
        });
        toast.dismiss();
        const error = error.response
          ? error.response.data.message
          : "Login Sir";

        toast.error(`${error}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
          hideProgressBar: false
        });
      }
    }
  };
};
