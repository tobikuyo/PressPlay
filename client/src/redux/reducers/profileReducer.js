import { GET_ALL_IDS, GET_ALL_MOVIES } from "../../constants/actions";

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
        default:
            return state;
    }
};

export default profileReducer;
