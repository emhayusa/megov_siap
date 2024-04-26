import {
  CREATE_PANGKAT_SUCCESS,
  CREATE_PANGKAT_FAIL,
  RETRIEVE_PANGKAT_SUCCESS,
  RETRIEVE_PANGKAT_FAIL,
  UPDATE_PANGKAT_SUCCESS,
  UPDATE_PANGKAT_FAIL,
  DELETE_PANGKAT_SUCCESS,
  DELETE_PANGKAT_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PANGKAT_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_PANGKAT_SUCCESS:
      return payload;

    case RETRIEVE_PANGKAT_FAIL:
      return [...datas];

    case UPDATE_PANGKAT_SUCCESS:
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

    case DELETE_PANGKAT_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
