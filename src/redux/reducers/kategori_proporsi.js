import {
  CREATE_KATEGORI_PROPORSI_SUCCESS,
  CREATE_KATEGORI_PROPORSI_FAIL,
  RETRIEVE_KATEGORI_PROPORSI_SUCCESS,
  RETRIEVE_KATEGORI_PROPORSI_FAIL,
  UPDATE_KATEGORI_PROPORSI_SUCCESS,
  UPDATE_KATEGORI_PROPORSI_FAIL,
  DELETE_KATEGORI_PROPORSI_SUCCESS,
  DELETE_KATEGORI_PROPORSI_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_KATEGORI_PROPORSI_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_KATEGORI_PROPORSI_SUCCESS:
      return payload;

    case RETRIEVE_KATEGORI_PROPORSI_FAIL:
      return [...datas];

    case UPDATE_KATEGORI_PROPORSI_SUCCESS:
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

    case DELETE_KATEGORI_PROPORSI_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
