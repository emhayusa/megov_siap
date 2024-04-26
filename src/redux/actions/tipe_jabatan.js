import {
  CREATE_TIPE_JABATAN_SUCCESS,
  CREATE_TIPE_JABATAN_FAIL,
  RETRIEVE_TIPE_JABATAN_SUCCESS,
  RETRIEVE_TIPE_JABATAN_FAIL,
  UPDATE_TIPE_JABATAN_SUCCESS,
  UPDATE_TIPE_JABATAN_FAIL,
  DELETE_TIPE_JABATAN_SUCCESS,
  DELETE_TIPE_JABATAN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/tipe_jabatan.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_TIPE_JABATAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_tipe_jabatan) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_tipe_jabatan
    });

    dispatch({
      type: CREATE_TIPE_JABATAN_SUCCESS,
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
      type: UPDATE_TIPE_JABATAN_SUCCESS,
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
      type: DELETE_TIPE_JABATAN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
