import {GET_EVENT_FULFILLED, GET_CATS_FUL} from "../type";

const initstate = {
 cats: [],
 event: []
};

const HomeReduces = (state = initstate, action) => {
 console.log(action.type);
 switch (action.type) {
  case GET_CATS_FUL:
   return {
    ...state,
    cats: action.payload.data
   };
  case GET_EVENT_FULFILLED:
   return {
    ...state,
    event: action.payload.data
   };
  default:
   return state;
 }
};

export default HomeReduces;
