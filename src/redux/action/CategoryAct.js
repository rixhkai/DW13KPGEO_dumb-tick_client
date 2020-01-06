import {GET_EVENT} from "../type";
import Api from "../../utils/Api";

export const Category = id => {
 return {
  type: GET_EVENT,
  payload: Api.get(`category/${id}/events`)
 };
};
