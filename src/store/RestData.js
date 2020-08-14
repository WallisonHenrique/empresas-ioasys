import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestData {
  GetData = (dataType, params) => Axios.get(RestUrls[dataType], params);

  GetOnlyData = (dataType, params, id) =>
    Axios.get(`${RestUrls[dataType]}/${id}`, params);

  LoginData = (dataType, data) => Axios.post(RestUrls[dataType], data);
}
