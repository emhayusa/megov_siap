import {
  CREATE_STATUS_PERSETUJUAN_SUCCESS,
  CREATE_STATUS_PERSETUJUAN_FAIL,
  RETRIEVE_STATUS_PERSETUJUAN_SUCCESS,
  RETRIEVE_STATUS_PERSETUJUAN_FAIL,
  UPDATE_STATUS_PERSETUJUAN_SUCCESS,
  UPDATE_STATUS_PERSETUJUAN_FAIL,
  DELETE_STATUS_PERSETUJUAN_SUCCESS,
  DELETE_STATUS_PERSETUJUAN_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_STATUS_PERSETUJUAN_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_STATUS_PERSETUJUAN_SUCCESS:
      return payload;

    case RETRIEVE_STATUS_PERSETUJUAN_FAIL:
      return [...datas];

    case UPDATE_STATUS_PERSETUJUAN_SUCCESS:
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

    case DELETE_STATUS_PERSETUJUAN_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
