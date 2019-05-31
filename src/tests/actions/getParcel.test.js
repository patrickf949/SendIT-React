import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { FETCH_PARCEL_SUCCESS } from "../../actions/types";
import { getParcelAction } from "../../actions/getParcelAction";
import { data } from "../mock_data/data";

const middleWare = [thunk];

const mockStore = configureStore(middleWare);

describe("Action for getting Parcels", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Should fetch parcels", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: { Parcel: [data.getParcels.parcels[0]], message: "message" }
      });
    });
    const expectedAction = [
      {
        type: FETCH_PARCEL_SUCCESS,
        payload: { Parcel: [data.getParcels.parcels[0]], message: "message" }
      }
    ];
    return store.dispatch(getParcelAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("should toast on fetch parcel failure", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 400,
        response: { message: "no article" }
      });
    });
    return store.dispatch(getParcelAction()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
