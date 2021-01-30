import { SEARCH_MOVIE } from "../../constants/actions";

const initialState = {
    results: []
};

const searchReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_MOVIE:
            return { ...state, results: payload };
        default:
            return state;
    }
};

export default searchReducer;
