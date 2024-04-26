import {
  CREATE_JABATAN_SUCCESS,
  CREATE_JABATAN_FAIL,
  RETRIEVE_JABATAN_SUCCESS,
  RETRIEVE_JABATAN_FAIL,
  UPDATE_JABATAN_SUCCESS,
  UPDATE_JABATAN_FAIL,
  DELETE_JABATAN_SUCCESS,
  DELETE_JABATAN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/jabatan.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_JABATAN_SUCCESS,
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
      type: CREATE_JABATAN_SUCCESS,
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
      type: UPDATE_JABATAN_SUCCESS,
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
      type: DELETE_JABATAN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
