import {
    ADD_MOVIE,
    GET_ALL_IDS,
    GET_ALL_MOVIES,
    REMOVE_MOVIE
} from "../../constants/actions";

const initialState = {
    movieList: [],
    ids: []
};

const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_MOVIES:
            return { ...state, movieList: payload };
        case GET_ALL_IDS:
            return { ...state, ids: payload };
        case ADD_MOVIE:
            return { ...state, movieList: [...state.movieList, payload] };
        case REMOVE_MOVIE:
            return {
                ...state,
                movieList: state.movieList.filter(movie => movie.id !== payload)
            };
        default:
            return state;
    }
};

export default profileReducer;
