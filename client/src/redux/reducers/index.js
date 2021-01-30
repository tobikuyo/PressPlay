import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import detailReducer from "./detailReducer";
import castReducer from "./castReducer";
import profileReducer from "./profileReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    movieReducer,
    detailReducer,
    castReducer,
    profileReducer,
    searchReducer
});

export default rootReducer;
