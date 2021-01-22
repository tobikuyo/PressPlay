import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import castReducer from "./castReducer";

const rootReducer = combineReducers({ movieReducer, detailReducer, castReducer });

export default rootReducer;
