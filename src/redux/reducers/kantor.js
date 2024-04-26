import {
  CREATE_KANTOR_SUCCESS,
  CREATE_KANTOR_FAIL,
  RETRIEVE_KANTOR_SUCCESS,
  RETRIEVE_KANTOR_FAIL,
  UPDATE_KANTOR_SUCCESS,
  UPDATE_KANTOR_FAIL,
  DELETE_KANTOR_SUCCESS,
  DELETE_KANTOR_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_KANTOR_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_KANTOR_SUCCESS:
      return payload;

    case RETRIEVE_KANTOR_FAIL:
      return [...datas];

    case UPDATE_KANTOR_SUCCESS:
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

    case DELETE_KANTOR_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
