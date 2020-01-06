import {GET_PROF} from "../type";
import Api from "../../utils/Api";

export const Profile = id => {
 return {
  type: GET_PROF,
  payload: Api.get(`user/${id}/favorites`)
 };
};
