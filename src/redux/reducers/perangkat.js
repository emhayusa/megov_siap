import {
  CREATE_PERANGKAT_SUCCESS,
  CREATE_PERANGKAT_FAIL,
  RETRIEVE_PERANGKAT_SUCCESS,
  RETRIEVE_PERANGKAT_FAIL,
  UPDATE_PERANGKAT_SUCCESS,
  UPDATE_PERANGKAT_FAIL,
  DELETE_PERANGKAT_SUCCESS,
  DELETE_PERANGKAT_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PERANGKAT_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_PERANGKAT_SUCCESS:
      return payload;

    case RETRIEVE_PERANGKAT_FAIL:
      return [...datas];

    case UPDATE_PERANGKAT_SUCCESS:
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

    case DELETE_PERANGKAT_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
