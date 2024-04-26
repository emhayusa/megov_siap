import {
  CREATE_KELAS_TUNKIN_SUCCESS,
  CREATE_KELAS_TUNKIN_FAIL,
  RETRIEVE_KELAS_TUNKIN_SUCCESS,
  RETRIEVE_KELAS_TUNKIN_FAIL,
  UPDATE_KELAS_TUNKIN_SUCCESS,
  UPDATE_KELAS_TUNKIN_FAIL,
  DELETE_KELAS_TUNKIN_SUCCESS,
  DELETE_KELAS_TUNKIN_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_KELAS_TUNKIN_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_KELAS_TUNKIN_SUCCESS:
      return payload;

    case RETRIEVE_KELAS_TUNKIN_FAIL:
      return [...datas];

    case UPDATE_KELAS_TUNKIN_SUCCESS:
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

    case DELETE_KELAS_TUNKIN_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
