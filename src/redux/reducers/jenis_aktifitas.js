import {
  CREATE_JENIS_AKTIFITAS_SUCCESS,
  CREATE_JENIS_AKTIFITAS_FAIL,
  RETRIEVE_JENIS_AKTIFITAS_SUCCESS,
  RETRIEVE_JENIS_AKTIFITAS_FAIL,
  UPDATE_JENIS_AKTIFITAS_SUCCESS,
  UPDATE_JENIS_AKTIFITAS_FAIL,
  DELETE_JENIS_AKTIFITAS_SUCCESS,
  DELETE_JENIS_AKTIFITAS_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_JENIS_AKTIFITAS_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_JENIS_AKTIFITAS_SUCCESS:
      return payload;

    case RETRIEVE_JENIS_AKTIFITAS_FAIL:
      return [...datas];

    case UPDATE_JENIS_AKTIFITAS_SUCCESS:
      return datas.map((data) => {
        if (data.uuid === payload.uuid) {
          return {
            ...datas,
            ...payload,
          };
        } else {
          return data;
        }
      });

    case DELETE_JENIS_AKTIFITAS_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
