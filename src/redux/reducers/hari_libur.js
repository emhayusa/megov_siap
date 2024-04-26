import {
  CREATE_HARI_LIBUR_SUCCESS,
  CREATE_HARI_LIBUR_FAIL,
  RETRIEVE_HARI_LIBUR_SUCCESS,
  RETRIEVE_HARI_LIBUR_FAIL,
  UPDATE_HARI_LIBUR_SUCCESS,
  UPDATE_HARI_LIBUR_FAIL,
  DELETE_HARI_LIBUR_SUCCESS,
  DELETE_HARI_LIBUR_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HARI_LIBUR_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_HARI_LIBUR_SUCCESS:
      return payload;

    case RETRIEVE_HARI_LIBUR_FAIL:
      return [...datas];

    case UPDATE_HARI_LIBUR_SUCCESS:
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

    case DELETE_HARI_LIBUR_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
