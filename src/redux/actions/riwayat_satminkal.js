import {
  CREATE_RIWAYAT_SATMINKAL_SUCCESS,
  CREATE_RIWAYAT_SATMINKAL_FAIL,
  RETRIEVE_RIWAYAT_SATMINKAL_SUCCESS,
  RETRIEVE_RIWAYAT_SATMINKAL_FAIL,
  UPDATE_RIWAYAT_SATMINKAL_SUCCESS,
  UPDATE_RIWAYAT_SATMINKAL_FAIL,
  DELETE_RIWAYAT_SATMINKAL_SUCCESS,
  DELETE_RIWAYAT_SATMINKAL_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/riwayat_satminkal.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_RIWAYAT_SATMINKAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (data) => async (dispatch) => {
  try {
    const res = await Service.create(data);

    dispatch({
      type: CREATE_RIWAYAT_SATMINKAL_SUCCESS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    return Promise.reject(err);
  }
};

export const update = (uuid, data) => async (dispatch) => {
  try {
    const res = await Service.update(uuid, data);

    dispatch({
      type: UPDATE_RIWAYAT_SATMINKAL_SUCCESS,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    return Promise.reject(err);
  }
};

export const remove = (uuid) => async (dispatch) => {
  try {
    await Service.remove(uuid);

    dispatch({
      type: DELETE_RIWAYAT_SATMINKAL_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
