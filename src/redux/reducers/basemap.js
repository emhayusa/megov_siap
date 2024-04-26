import {
  CREATE_BASEMAP_SUCCESS,
  CREATE_BASEMAP_FAIL,
  RETRIEVE_BASEMAP_SUCCESS,
  RETRIEVE_BASEMAP_FAIL,
  UPDATE_BASEMAP_SUCCESS,
  UPDATE_BASEMAP_FAIL,
  DELETE_BASEMAP_SUCCESS,
  DELETE_BASEMAP_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BASEMAP_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_BASEMAP_SUCCESS:
      return payload;

    case RETRIEVE_BASEMAP_FAIL:
      return [...datas];

    case UPDATE_BASEMAP_SUCCESS:
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

    case DELETE_BASEMAP_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
