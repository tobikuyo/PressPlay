import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import castReducer from "./castReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    movieReducer,
    detailReducer,
    castReducer,
    profileReducer
});

export default rootReducer;
