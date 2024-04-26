import {
  CREATE_ORGANISASI_SUCCESS,
  CREATE_ORGANISASI_FAIL,
  RETRIEVE_ORGANISASI_SUCCESS,
  RETRIEVE_ORGANISASI_FAIL,
  UPDATE_ORGANISASI_SUCCESS,
  UPDATE_ORGANISASI_FAIL,
  DELETE_ORGANISASI_SUCCESS,
  DELETE_ORGANISASI_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORGANISASI_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_ORGANISASI_SUCCESS:
      return payload;

    case RETRIEVE_ORGANISASI_FAIL:
      return [...datas];

    case UPDATE_ORGANISASI_SUCCESS:
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

    case DELETE_ORGANISASI_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
