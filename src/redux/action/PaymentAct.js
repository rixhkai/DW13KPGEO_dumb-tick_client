import {GET_PAY} from "../type";
import Api from "../../utils/Api";

//prettier-ignore
export const Payment = (id) => {
 return {
  type: GET_PAY,
  payload: Api.get(`payment/${id}`)
 };
};
