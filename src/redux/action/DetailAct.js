import Api from "../../utils/Api";
import {GET_DET} from "../type";

//prettier-ignore
export const Detail = (id) => {
 return {
  type: GET_DET,
  payload: Api.get('event/'+id)
 };
};
