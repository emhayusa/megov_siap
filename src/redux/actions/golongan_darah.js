import {
  CREATE_GOLONGAN_DARAH_SUCCESS,
  CREATE_GOLONGAN_DARAH_FAIL,
  RETRIEVE_GOLONGAN_DARAH_SUCCESS,
  RETRIEVE_GOLONGAN_DARAH_FAIL,
  UPDATE_GOLONGAN_DARAH_SUCCESS,
  UPDATE_GOLONGAN_DARAH_FAIL,
  DELETE_GOLONGAN_DARAH_SUCCESS,
  DELETE_GOLONGAN_DARAH_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/golongan_darah.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_GOLONGAN_DARAH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_golongan_darah) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_golongan_darah
    });

    dispatch({
      type: CREATE_GOLONGAN_DARAH_SUCCESS,
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
      type: UPDATE_GOLONGAN_DARAH_SUCCESS,
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
      type: DELETE_GOLONGAN_DARAH_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
