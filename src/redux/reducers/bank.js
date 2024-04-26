import {
  CREATE_BANK_SUCCESS,
  CREATE_BANK_FAIL,
  RETRIEVE_BANK_SUCCESS,
  RETRIEVE_BANK_FAIL,
  UPDATE_BANK_SUCCESS,
  UPDATE_BANK_FAIL,
  DELETE_BANK_SUCCESS,
  DELETE_BANK_FAIL,
} from "../actions/types";

const initialState = [];

function Reducer(datas = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BANK_SUCCESS:
      return [...datas, payload];

    case RETRIEVE_BANK_SUCCESS:
      return payload;

    case RETRIEVE_BANK_FAIL:
      return [...datas];

    case UPDATE_BANK_SUCCESS:
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

    case DELETE_BANK_SUCCESS:
      return datas.filter(({ uuid }) => uuid !== payload.uuid);

    default:
      return datas;
  }
}

export default Reducer;
