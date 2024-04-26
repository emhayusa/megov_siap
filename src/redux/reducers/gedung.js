import {
  CREATE_GEDUNG_SUCCESS,
  CREATE_GEDUNG_FAIL,
  RETRIEVE_GEDUNG_SUCCESS,
  RETRIEVE_GEDUNG_FAIL,
  UPDATE_GEDUNG_SUCCESS,
  UPDATE_GEDUNG_FAIL,
  DELETE_GEDUNG_SUCCESS,
  DELETE_GEDUNG_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GEDUNG_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_GEDUNG_SUCCESS:
      return payload;

    case RETRIEVE_GEDUNG_FAIL:
      return [...datas];

    case UPDATE_GEDUNG_SUCCESS:
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

    case DELETE_GEDUNG_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
