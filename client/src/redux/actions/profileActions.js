import axiosInstance from "../../api/profile";
import { ADD_MOVIE, REMOVE_MOVIE } from "../../constants/actions";

export const addMovie = movie => async dispatch => {
    try {
        const { data } = await axiosInstance.put("/", movie);
        dispatch({ type: ADD_MOVIE, payload: data });
    } catch (error) {
        console.log("ADD MOVIE", error);
    }
};

export const removeMovie = movie => async dispatch => {
    try {
        const { data } = await axiosInstance.delete(`/${movie._id}`);
        dispatch({ type: REMOVE_MOVIE, payload: data });
    } catch (error) {
        console.log("REMOVE MOVIE", error);
    }
};
