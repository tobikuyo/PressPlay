import axiosInstance from "../../api/movieDetail";
import { FETCH_CAST } from "../../constants/actions";

export const fetchCast = movieID => async dispatch => {
    try {
        const { data } = await axiosInstance.get(`/${movieID}/credits`);
        dispatch({ type: FETCH_CAST, payload: data.cast });
    } catch (error) {
        console.log("FETCH CAST", error);
    }
};
