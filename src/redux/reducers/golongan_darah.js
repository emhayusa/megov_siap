import {
  CREATE_GOLONGAN_DARAH_SUCCESS,
  CREATE_GOLONGAN_DARAH_FAIL,
  RETRIEVE_GOLONGAN_DARAH_SUCCESS,
  RETRIEVE_GOLONGAN_DARAH_FAIL,
  UPDATE_GOLONGAN_DARAH_SUCCESS,
  UPDATE_GOLONGAN_DARAH_FAIL,
  DELETE_GOLONGAN_DARAH_SUCCESS,
  DELETE_GOLONGAN_DARAH_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GOLONGAN_DARAH_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_GOLONGAN_DARAH_SUCCESS:
      return payload;

    case RETRIEVE_GOLONGAN_DARAH_FAIL:
      return [...datas];

    case UPDATE_GOLONGAN_DARAH_SUCCESS:
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

    case DELETE_GOLONGAN_DARAH_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
