import {
  CREATE_STATUS_PERKAWINAN_SUCCESS,
  CREATE_STATUS_PERKAWINAN_FAIL,
  RETRIEVE_STATUS_PERKAWINAN_SUCCESS,
  RETRIEVE_STATUS_PERKAWINAN_FAIL,
  UPDATE_STATUS_PERKAWINAN_SUCCESS,
  UPDATE_STATUS_PERKAWINAN_FAIL,
  DELETE_STATUS_PERKAWINAN_SUCCESS,
  DELETE_STATUS_PERKAWINAN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/status_perkawinan.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_STATUS_PERKAWINAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_status_perkawinan) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_status_perkawinan
    });

    dispatch({
      type: CREATE_STATUS_PERKAWINAN_SUCCESS,
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
      type: UPDATE_STATUS_PERKAWINAN_SUCCESS,
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
      type: DELETE_STATUS_PERKAWINAN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
