import {
  CREATE_STATUS_PEGAWAI_SUCCESS,
  CREATE_STATUS_PEGAWAI_FAIL,
  RETRIEVE_STATUS_PEGAWAI_SUCCESS,
  RETRIEVE_STATUS_PEGAWAI_FAIL,
  UPDATE_STATUS_PEGAWAI_SUCCESS,
  UPDATE_STATUS_PEGAWAI_FAIL,
  DELETE_STATUS_PEGAWAI_SUCCESS,
  DELETE_STATUS_PEGAWAI_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/status_pegawai.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_STATUS_PEGAWAI_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_status_pegawai) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_status_pegawai
    });

    dispatch({
      type: CREATE_STATUS_PEGAWAI_SUCCESS,
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
      type: UPDATE_STATUS_PEGAWAI_SUCCESS,
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
      type: DELETE_STATUS_PEGAWAI_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
