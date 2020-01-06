import {GET_DET_PEN, GET_DET_FUL} from "../type";

const initstate = {
 detail: [],
 isLoading: false
};

const DetailReducer = (state = initstate, action) => {
 console.log(action.type);
 switch (action.type) {
  case GET_DET_PEN:
   return {
    ...state,
    isLoading: true
   };
  case GET_DET_FUL:
   return {
    ...state,
    detail: action.payload.data
   };
  default:
   return state;
 }
};

export default DetailReducer;
