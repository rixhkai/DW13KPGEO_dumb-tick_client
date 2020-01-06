import {combineReducers} from "redux";
import HomeReduces from "./HomeReduces";
import DetailReducer from "./DetailReducer";
import PaymentReducer from "./PaymentReducer";
import CategoryReducer from "./CategoryReducer";
import TicketReducer from "./TicketReducer";
import ProfileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
 HomeReduces,
 DetailReducer,
 PaymentReducer,
 CategoryReducer,
 TicketReducer,
 ProfileReducer
});

export default rootReducer;
