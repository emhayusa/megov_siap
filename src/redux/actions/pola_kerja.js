import {
  CREATE_POLA_KERJA_SUCCESS,
  CREATE_POLA_KERJA_FAIL,
  RETRIEVE_POLA_KERJA_SUCCESS,
  RETRIEVE_POLA_KERJA_FAIL,
  UPDATE_POLA_KERJA_SUCCESS,
  UPDATE_POLA_KERJA_FAIL,
  DELETE_POLA_KERJA_SUCCESS,
  DELETE_POLA_KERJA_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/pola_kerja.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_POLA_KERJA_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_pola_kerja) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_pola_kerja
    });

    dispatch({
      type: CREATE_POLA_KERJA_SUCCESS,
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
      type: UPDATE_POLA_KERJA_SUCCESS,
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
      type: DELETE_POLA_KERJA_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
