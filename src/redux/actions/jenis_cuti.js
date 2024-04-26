import {
  CREATE_JENIS_CUTI_SUCCESS,
  CREATE_JENIS_CUTI_FAIL,
  RETRIEVE_JENIS_CUTI_SUCCESS,
  RETRIEVE_JENIS_CUTI_FAIL,
  UPDATE_JENIS_CUTI_SUCCESS,
  UPDATE_JENIS_CUTI_FAIL,
  DELETE_JENIS_CUTI_SUCCESS,
  DELETE_JENIS_CUTI_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/jenis_cuti.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_JENIS_CUTI_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_jenis_cuti) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_jenis_cuti
    });

    dispatch({
      type: CREATE_JENIS_CUTI_SUCCESS,
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
      type: UPDATE_JENIS_CUTI_SUCCESS,
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
      type: DELETE_JENIS_CUTI_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
