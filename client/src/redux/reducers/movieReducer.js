import { FETCH_TRENDING } from "../../constants/actions";

const initialState = {
    trending: [],
    popular: [],
    nowPlaying: [],
    topRated: []
};

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_TRENDING:
            return { ...state, trending: payload };
        default:
            return state;
    }
};

export default movieReducer;
