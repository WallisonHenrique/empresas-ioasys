import { ActionTypes } from "./Types";

export const StoreReducer = (storeData, action) => {
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        [action.payload.dataType]: action.payload.data,
        [`${action.payload.dataType}_params`]: action.payload.params.params,
        loading: false
      };
    case ActionTypes.DATA_ONLY:
      return {
        ...storeData,
        enterprise: action.payload.data.enterprise,
        [`enterprise_id`]: action.payload.id,
        loading: false
      };
    case ActionTypes.SET_LOADING:
      return {
        ...storeData,
        loading: action.payload
      };
    default:
      return storeData || {};
  }
};
