import {GET_EVENT_FULFILLED} from "../type";

const initstate = {
 event: []
};

const CategoryReducer = (state = initstate, action) => {
 console.log(action.type);
 switch (action.type) {
  case GET_EVENT_FULFILLED:
   return {
    ...state,
    event: action.payload.data
   };
  default:
   return state;
 }
};

export default CategoryReducer;
