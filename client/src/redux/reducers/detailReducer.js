import { FETCH_DETAILS } from "../../constants/actions";

const initialState = {
    movie: {}
};

const detailReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_DETAILS:
            return { ...state, movie: payload };
        default:
            return state;
    }
};

export default detailReducer;
