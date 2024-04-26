import {
  CREATE_PEGAWAI_SUCCESS,
  CREATE_PEGAWAI_FAIL,
  RETRIEVE_PEGAWAI_SUCCESS,
  RETRIEVE_PEGAWAI_FAIL,
  UPDATE_PEGAWAI_SUCCESS,
  UPDATE_PEGAWAI_FAIL,
  DELETE_PEGAWAI_SUCCESS,
  DELETE_PEGAWAI_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PEGAWAI_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_PEGAWAI_SUCCESS:
      return payload;

    case RETRIEVE_PEGAWAI_FAIL:
      return [...datas];

    case UPDATE_PEGAWAI_SUCCESS:
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

    case DELETE_PEGAWAI_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
