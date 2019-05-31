import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import {
  PARCEL_FAIL,
  PARCEL_SUCCESS,
  PARCEL_STARTED
} from "../../actions/types";
import { parcelCreateAction } from "../../actions/parcelCreateAction";
import { data } from "../mock_data/data";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Create Parcel", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should create parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 201,
        response: data.getParcels.parcels[0]
      });
    });
    const expectedAction = [
      {
        type: "PARCEL_STARTED"
      },
      {
        payload: {
          current_location: "Kawempe",
          date_created: "Thu, 30 May 2019 19:28:46 GMT",
          date_to_be_delivered: "Sat, 01 Jun 2019 21:28:46 GMT",
          destination: "Kwagala, Kivumbo side",
          parcel_description: "Beerbongs",
          parcel_id: 42,
          pickup_location: "Kawempe",
          price: null,
          recipient: "Mama Rhoda",
          recipient_contact: "0773489238",
          status: "pending",
          user_id: 50,
          weight_kgs: null
        },
        type: "PARCEL_SUCCESS"
      }
    ];
    return store.dispatch(parcelCreateAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
