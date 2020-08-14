import { ActionTypes } from "./Types";
import { RestData } from "./RestData";

const dataSource = new RestData();

export const loadData = (dataType, params) => ({
  type: ActionTypes.DATA_LOAD,
  payload: dataSource
    .GetData(dataType, params)
    .then(response => ({ dataType, data: response.data, params }))
});

export const onlyData = (dataType, params, id) => ({
  type: ActionTypes.DATA_ONLY,
  payload: dataSource
    .GetOnlyData(dataType, params, id)
    .then(response => ({ dataType, data: response.data, id }))
});

export const setLoading = data => ({
  type: ActionTypes.SET_LOADING,
  payload: data
});
