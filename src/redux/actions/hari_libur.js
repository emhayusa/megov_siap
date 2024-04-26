import {
  CREATE_HARI_LIBUR_SUCCESS,
  CREATE_HARI_LIBUR_FAIL,
  RETRIEVE_HARI_LIBUR_SUCCESS,
  RETRIEVE_HARI_LIBUR_FAIL,
  UPDATE_HARI_LIBUR_SUCCESS,
  UPDATE_HARI_LIBUR_FAIL,
  DELETE_HARI_LIBUR_SUCCESS,
  DELETE_HARI_LIBUR_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/hari_libur.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_HARI_LIBUR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_hari_libur) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_hari_libur
    });

    dispatch({
      type: CREATE_HARI_LIBUR_SUCCESS,
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
      type: UPDATE_HARI_LIBUR_SUCCESS,
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
      type: DELETE_HARI_LIBUR_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
