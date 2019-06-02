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
    sessionStorage.setItem("Access_token", "random-string");
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
        type: PARCEL_STARTED
      },
      {
        payload: data.getParcels.parcels[0],
        type: PARCEL_SUCCESS
      }
    ];
    return store.dispatch(parcelCreateAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it("Should handle create parcel fail", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 400,
        response: {
          message: "Failed"
        }
      });
    });
    const expectedAction = [
      {
        type: PARCEL_STARTED
      },
      {
        type: PARCEL_FAIL
      }
    ];
    return store.dispatch(parcelCreateAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
