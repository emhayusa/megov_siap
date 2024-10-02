import {
  CREATE_RIWAYAT_JABATAN_SUCCESS,
  CREATE_RIWAYAT_JABATAN_FAIL,
  RETRIEVE_RIWAYAT_JABATAN_SUCCESS,
  RETRIEVE_RIWAYAT_JABATAN_FAIL,
  UPDATE_RIWAYAT_JABATAN_SUCCESS,
  UPDATE_RIWAYAT_JABATAN_FAIL,
  DELETE_RIWAYAT_JABATAN_SUCCESS,
  DELETE_RIWAYAT_JABATAN_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_RIWAYAT_JABATAN_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_RIWAYAT_JABATAN_SUCCESS:
      return payload;

    case RETRIEVE_RIWAYAT_JABATAN_FAIL:
      return [...datas];

    case UPDATE_RIWAYAT_JABATAN_SUCCESS:
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

    case DELETE_RIWAYAT_JABATAN_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
