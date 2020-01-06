import {GET_PROF_FUL, GET_PROF_PEN} from "../type";

const initstate = {
 fav: [],
 isLoading: false
};

const ProfileReducer = (state = initstate, action) => {
 switch (action.type) {
  case GET_PROF_PEN:
   return {
    ...state,
    isLoading: true
   };
  case GET_PROF_FUL:
   return {
    ...state,
    isLoading: false,
    fav: action.payload.data
   };
  default:
   return state;
 }
};

export default ProfileReducer;
