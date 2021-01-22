import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({ movieReducer, detailReducer });

export default rootReducer;
