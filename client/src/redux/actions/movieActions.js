import axiosInstance from "../../api/movies";
import { FETCH_TRENDING } from "../../constants/actions";
import { TRENDING_URL } from "../../constants/url";

export const fetchTrending = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get(TRENDING_URL);
        dispatch({ type: FETCH_TRENDING, payload: data.results });
    } catch (error) {
        console.log("FETCH TRENDING", error);
    }
};
