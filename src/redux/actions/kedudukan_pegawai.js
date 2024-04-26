import {
  CREATE_KEDUDUKAN_PEGAWAI_SUCCESS,
  CREATE_KEDUDUKAN_PEGAWAI_FAIL,
  RETRIEVE_KEDUDUKAN_PEGAWAI_SUCCESS,
  RETRIEVE_KEDUDUKAN_PEGAWAI_FAIL,
  UPDATE_KEDUDUKAN_PEGAWAI_SUCCESS,
  UPDATE_KEDUDUKAN_PEGAWAI_FAIL,
  DELETE_KEDUDUKAN_PEGAWAI_SUCCESS,
  DELETE_KEDUDUKAN_PEGAWAI_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/kedudukan_pegawai.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_KEDUDUKAN_PEGAWAI_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_kedudukan_pegawai) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_kedudukan_pegawai
    });

    dispatch({
      type: CREATE_KEDUDUKAN_PEGAWAI_SUCCESS,
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
      type: UPDATE_KEDUDUKAN_PEGAWAI_SUCCESS,
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
      type: DELETE_KEDUDUKAN_PEGAWAI_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
