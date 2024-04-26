import {
  CREATE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
  CREATE_JENIS_TRANSPORT_PERJADIN_FAIL,
  RETRIEVE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
  RETRIEVE_JENIS_TRANSPORT_PERJADIN_FAIL,
  UPDATE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
  UPDATE_JENIS_TRANSPORT_PERJADIN_FAIL,
  DELETE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
  DELETE_JENIS_TRANSPORT_PERJADIN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/jenis_transport_perjadin.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_jenis_transport_perjadin) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_jenis_transport_perjadin
    });

    dispatch({
      type: CREATE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
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
      type: UPDATE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
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
      type: DELETE_JENIS_TRANSPORT_PERJADIN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
