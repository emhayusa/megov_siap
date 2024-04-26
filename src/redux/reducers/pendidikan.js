import {
  CREATE_PENDIDIKAN_SUCCESS,
  CREATE_PENDIDIKAN_FAIL,
  RETRIEVE_PENDIDIKAN_SUCCESS,
  RETRIEVE_PENDIDIKAN_FAIL,
  UPDATE_PENDIDIKAN_SUCCESS,
  UPDATE_PENDIDIKAN_FAIL,
  DELETE_PENDIDIKAN_SUCCESS,
  DELETE_PENDIDIKAN_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PENDIDIKAN_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_PENDIDIKAN_SUCCESS:
      return payload;

    case RETRIEVE_PENDIDIKAN_FAIL:
      return [...datas];

    case UPDATE_PENDIDIKAN_SUCCESS:
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

    case DELETE_PENDIDIKAN_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
