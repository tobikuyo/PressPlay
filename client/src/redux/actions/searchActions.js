import axiosInstance from "../../api/search";
import { SEARCH_MOVIE } from "../../constants/actions";

export const searchMovie = query => async dispatch => {
    try {
        const { data } = await axiosInstance.get("/", { params: { query } });
        dispatch({ type: SEARCH_MOVIE, payload: data.results });
    } catch (error) {
        console.log("SEARCH ", error);
    }
};
