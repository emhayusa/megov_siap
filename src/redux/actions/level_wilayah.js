import {
  CREATE_LEVEL_WILAYAH_SUCCESS,
  CREATE_LEVEL_WILAYAH_FAIL,
  RETRIEVE_LEVEL_WILAYAH_SUCCESS,
  RETRIEVE_LEVEL_WILAYAH_FAIL,
  UPDATE_LEVEL_WILAYAH_SUCCESS,
  UPDATE_LEVEL_WILAYAH_FAIL,
  DELETE_LEVEL_WILAYAH_SUCCESS,
  DELETE_LEVEL_WILAYAH_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/level_wilayah.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_LEVEL_WILAYAH_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_level_wilayah) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_level_wilayah
    });

    dispatch({
      type: CREATE_LEVEL_WILAYAH_SUCCESS,
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
      type: UPDATE_LEVEL_WILAYAH_SUCCESS,
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
      type: DELETE_LEVEL_WILAYAH_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
