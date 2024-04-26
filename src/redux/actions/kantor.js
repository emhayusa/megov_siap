import {
  CREATE_KANTOR_SUCCESS,
  CREATE_KANTOR_FAIL,
  RETRIEVE_KANTOR_SUCCESS,
  RETRIEVE_KANTOR_FAIL,
  UPDATE_KANTOR_SUCCESS,
  UPDATE_KANTOR_FAIL,
  DELETE_KANTOR_SUCCESS,
  DELETE_KANTOR_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/kantor.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_KANTOR_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_kantor) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_kantor
    });

    dispatch({
      type: CREATE_KANTOR_SUCCESS,
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
      type: UPDATE_KANTOR_SUCCESS,
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
      type: DELETE_KANTOR_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
