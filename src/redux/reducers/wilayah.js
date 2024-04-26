import {
  CREATE_WILAYAH_SUCCESS,
  CREATE_WILAYAH_FAIL,
  RETRIEVE_WILAYAH_SUCCESS,
  RETRIEVE_WILAYAH_FAIL,
  UPDATE_WILAYAH_SUCCESS,
  UPDATE_WILAYAH_FAIL,
  DELETE_WILAYAH_SUCCESS,
  DELETE_WILAYAH_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_WILAYAH_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_WILAYAH_SUCCESS:
      return payload;

    case RETRIEVE_WILAYAH_FAIL:
      return [...datas];

    case UPDATE_WILAYAH_SUCCESS:
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

    case DELETE_WILAYAH_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
