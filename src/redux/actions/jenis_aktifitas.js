import {
  CREATE_JENIS_AKTIFITAS_SUCCESS,
  CREATE_JENIS_AKTIFITAS_FAIL,
  RETRIEVE_JENIS_AKTIFITAS_SUCCESS,
  RETRIEVE_JENIS_AKTIFITAS_FAIL,
  UPDATE_JENIS_AKTIFITAS_SUCCESS,
  UPDATE_JENIS_AKTIFITAS_FAIL,
  DELETE_JENIS_AKTIFITAS_SUCCESS,
  DELETE_JENIS_AKTIFITAS_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/jenis_aktifitas.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_JENIS_AKTIFITAS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_jenis_aktifitas) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_jenis_aktifitas
    });

    dispatch({
      type: CREATE_JENIS_AKTIFITAS_SUCCESS,
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
      type: UPDATE_JENIS_AKTIFITAS_SUCCESS,
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
      type: DELETE_JENIS_AKTIFITAS_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
