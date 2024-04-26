import {
  CREATE_POLA_KERJA_SUCCESS,
  CREATE_POLA_KERJA_FAIL,
  RETRIEVE_POLA_KERJA_SUCCESS,
  RETRIEVE_POLA_KERJA_FAIL,
  UPDATE_POLA_KERJA_SUCCESS,
  UPDATE_POLA_KERJA_FAIL,
  DELETE_POLA_KERJA_SUCCESS,
  DELETE_POLA_KERJA_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_POLA_KERJA_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_POLA_KERJA_SUCCESS:
      return payload;

    case RETRIEVE_POLA_KERJA_FAIL:
      return [...datas];

    case UPDATE_POLA_KERJA_SUCCESS:
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

    case DELETE_POLA_KERJA_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
