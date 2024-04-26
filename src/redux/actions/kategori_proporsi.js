import {
  CREATE_KATEGORI_PROPORSI_SUCCESS,
  CREATE_KATEGORI_PROPORSI_FAIL,
  RETRIEVE_KATEGORI_PROPORSI_SUCCESS,
  RETRIEVE_KATEGORI_PROPORSI_FAIL,
  UPDATE_KATEGORI_PROPORSI_SUCCESS,
  UPDATE_KATEGORI_PROPORSI_FAIL,
  DELETE_KATEGORI_PROPORSI_SUCCESS,
  DELETE_KATEGORI_PROPORSI_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/kategori_proporsi.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_KATEGORI_PROPORSI_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_kategori_proporsi) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_kategori_proporsi
    });

    dispatch({
      type: CREATE_KATEGORI_PROPORSI_SUCCESS,
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
      type: UPDATE_KATEGORI_PROPORSI_SUCCESS,
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
      type: DELETE_KATEGORI_PROPORSI_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
