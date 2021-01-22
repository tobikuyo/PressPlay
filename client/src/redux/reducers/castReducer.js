import { FETCH_CAST } from "../../constants/actions";

const initialState = {
    cast: []
};

const castReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_CAST:
            return { ...state, cast: payload };
        default:
            return state;
    }
};

export default castReducer;
