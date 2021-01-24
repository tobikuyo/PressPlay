import axiosInstance from "../../api/profile";
import { ADD_MOVIE } from "../../constants/actions";

export const addMovie = movie => async dispatch => {
    try {
        const { data } = await axiosInstance.put("/", movie);
        dispatch({ type: ADD_MOVIE, payload: data });
    } catch (error) {
        console.log("ADD MOVIE", error);
    }
};
