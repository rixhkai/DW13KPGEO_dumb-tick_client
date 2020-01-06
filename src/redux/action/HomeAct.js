import Api from "../../utils/Api";
import {GET_EVENT, GET_CATS} from "../type";

export const Category = () => {
 return {
  type: GET_CATS,
  payload: Api.get("categories")
 };
};

export const Events = () => {
 return {
  type: GET_EVENT,
  payload: Api.get("events")
 };
};
