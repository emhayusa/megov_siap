import {
  CREATE_KELAS_TUNKIN_SUCCESS,
  CREATE_KELAS_TUNKIN_FAIL,
  RETRIEVE_KELAS_TUNKIN_SUCCESS,
  RETRIEVE_KELAS_TUNKIN_FAIL,
  UPDATE_KELAS_TUNKIN_SUCCESS,
  UPDATE_KELAS_TUNKIN_FAIL,
  DELETE_KELAS_TUNKIN_SUCCESS,
  DELETE_KELAS_TUNKIN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/kelas_tunkin.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_KELAS_TUNKIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_kelas_tunkin) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_kelas_tunkin
    });

    dispatch({
      type: CREATE_KELAS_TUNKIN_SUCCESS,
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
      type: UPDATE_KELAS_TUNKIN_SUCCESS,
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
      type: DELETE_KELAS_TUNKIN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
