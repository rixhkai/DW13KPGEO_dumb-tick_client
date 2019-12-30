const initstate = {
 cats: [],
 today: []
};

const HomeReduces = (state = initstate, action) => {
 console.log(action.type);
 switch (action.type) {
  case "GET_CATS_FULFILLED":
   return {
    ...state,
    cats: action.payload.data
   };
  case "GET_TODAYEVE_FULFILLED":
   return {
    ...state,
    today: action.payload.data
   };
  default:
   return state;
 }
};

export default HomeReduces;
