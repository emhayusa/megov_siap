import {
  CREATE_RIWAYAT_PANGKAT_SUCCESS,
  CREATE_RIWAYAT_PANGKAT_FAIL,
  RETRIEVE_RIWAYAT_PANGKAT_SUCCESS,
  RETRIEVE_RIWAYAT_PANGKAT_FAIL,
  UPDATE_RIWAYAT_PANGKAT_SUCCESS,
  UPDATE_RIWAYAT_PANGKAT_FAIL,
  DELETE_RIWAYAT_PANGKAT_SUCCESS,
  DELETE_RIWAYAT_PANGKAT_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_RIWAYAT_PANGKAT_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_RIWAYAT_PANGKAT_SUCCESS:
      return payload;

    case RETRIEVE_RIWAYAT_PANGKAT_FAIL:
      return [...datas];

    case UPDATE_RIWAYAT_PANGKAT_SUCCESS:
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

    case DELETE_RIWAYAT_PANGKAT_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
