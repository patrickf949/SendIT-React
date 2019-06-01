import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { FETCH_PARCELS_SUCCESS } from "../../actions/types";
import { getParcelsAction } from "../../actions/getParcelsAction";
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
        response: data.getParcels
      });
    });
    const expectedAction = [
      {
        type: FETCH_PARCELS_SUCCESS,
        payload: data.getParcels
      }
    ];
    return store.dispatch(getParcelsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it("should toast on fetch parcels failure", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 403,
        response: { message: "no parcels" }
      });
    });
    return store.dispatch(getParcelsAction()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
