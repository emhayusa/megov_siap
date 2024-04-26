import {
  CREATE_JENIS_KELAMIN_SUCCESS,
  CREATE_JENIS_KELAMIN_FAIL,
  RETRIEVE_JENIS_KELAMIN_SUCCESS,
  RETRIEVE_JENIS_KELAMIN_FAIL,
  UPDATE_JENIS_KELAMIN_SUCCESS,
  UPDATE_JENIS_KELAMIN_FAIL,
  DELETE_JENIS_KELAMIN_SUCCESS,
  DELETE_JENIS_KELAMIN_FAIL,
  SET_MESSAGE,
} from "./types";

import Service from "src/services/jenis_kelamin.service";
import EventBus from "src/utils/EventBus";

export const retrieve = () => async (dispatch) => {
  try {
    const res = await Service.getAll();

    dispatch({
      type: RETRIEVE_JENIS_KELAMIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};

export const create = (nama_jenis_kelamin) => async (dispatch) => {
  try {
    const res = await Service.create({
      nama_jenis_kelamin
    });

    dispatch({
      type: CREATE_JENIS_KELAMIN_SUCCESS,
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
      type: UPDATE_JENIS_KELAMIN_SUCCESS,
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
      type: DELETE_JENIS_KELAMIN_SUCCESS,
      payload: { uuid },
    });
  } catch (err) {
    if (err.response && err.response.status === 401) {
      EventBus.dispatch("logout");
    }
    console.log(err);
  }
};
