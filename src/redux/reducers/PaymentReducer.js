import {GET_PAY_FUL} from "../type";

const initstate = {
 payment: []
};

const PaymentReducer = (state = initstate, action) => {
 console.log(action.type);
 switch (action.type) {
  case GET_PAY_FUL:
   return {
    ...state,
    payment: action.payload.data
   };
  default:
   return state;
 }
};

export default PaymentReducer;
