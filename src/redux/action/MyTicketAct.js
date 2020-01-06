import {GET_TIC} from "../type";
import Api from "../../utils/Api";

export const MyTicket = (id, status) => {
 return {
  type: GET_TIC,
  payload: Api.get(`orders/${id}?status=${status}`)
 };
};
