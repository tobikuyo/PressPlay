import {
    FETCH_TRENDING,
    FETCH_POPULAR,
    FETCH_TOP_RATED,
    FETCH_NOW_PLAYING
} from "../../constants/actions";

const initialState = {
    trending: [],
    popular: [],
    topRated: [],
    nowPlaying: []
};

const movieReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_TRENDING:
            return { ...state, trending: payload };
        case FETCH_POPULAR:
            return { ...state, popular: payload };
        case FETCH_TOP_RATED:
            return { ...state, topRated: payload };
        case FETCH_NOW_PLAYING:
            return { ...state, nowPlaying: payload };
        default:
            return state;
    }
};

export default movieReducer;
