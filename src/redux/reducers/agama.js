import {
  CREATE_AGAMA_SUCCESS,
  CREATE_AGAMA_FAIL,
  RETRIEVE_AGAMA_SUCCESS,
  RETRIEVE_AGAMA_FAIL,
  UPDATE_AGAMA_SUCCESS,
  UPDATE_AGAMA_FAIL,
  DELETE_AGAMA_SUCCESS,
  DELETE_AGAMA_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_AGAMA_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_AGAMA_SUCCESS:
      return payload;

    case RETRIEVE_AGAMA_FAIL:
      return [...datas];

    case UPDATE_AGAMA_SUCCESS:
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

    case DELETE_AGAMA_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
