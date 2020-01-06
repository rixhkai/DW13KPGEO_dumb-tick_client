import {GET_TICK, GET_TICK_PEN, GET_TICK_FUL, GET_TICK_REJ} from "../type";

const inistate = {
 ticket: [],
 isLoading: false
};

const TicketReducer = (state = inistate, action) => {
 switch (action.type) {
  case GET_TICK_PEN:
   return {
    ...state,
    isLoading: true
   };
  case GET_TICK_FUL:
   return {
    ...state,
    isLoading: false,
    ticket: action.payload.data
   };
  case GET_TICK_REJ:
   return {
    ...state,
    isLoading: true
   };
  default:
   return state;
 }
};

export default TicketReducer;
