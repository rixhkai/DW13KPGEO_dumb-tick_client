import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/RootReducers";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

export default function configureStore() {
 return createStore(rootReducer, applyMiddleware(logger, promiseMiddleware));
}
