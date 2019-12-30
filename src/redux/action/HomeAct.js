import Api from "../../utils/Api";

export const Category = () => {
 return {
  type: "GET_CATS",
  payload: Api.get("categories")
 };
};

export const TodayEve = () => {
 return {
  type: "GET_TODAYEVE",
  payload: Api.get("events?")
 };
};
