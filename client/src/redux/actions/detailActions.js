import axiosInstance from "../../api/movieDetail";
import { FETCH_DETAILS } from "../../constants/actions";

export const fetchDetails = movieID => async dispatch => {
    try {
        const { data } = await axiosInstance.get(`/${movieID}`);
        dispatch({ type: FETCH_DETAILS, payload: data });
    } catch (error) {
        console.log("FETCH DETAILS", error);
    }
};
