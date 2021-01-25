import axiosInstance from "../../api/profile";
import {
    ADD_MOVIE,
    GET_ALL_IDS,
    GET_ALL_MOVIES,
    REMOVE_MOVIE
} from "../../constants/actions";

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

export const getAllMovies = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get();
        dispatch({ type: GET_ALL_MOVIES, payload: data.movies });
    } catch (error) {
        console.log("MOVIE LIST", error);
    }
};

export const getMovieIds = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get("/ids");
        dispatch({ type: GET_ALL_IDS, payload: data.ids });
    } catch (error) {
        console.log("ID LIST", error);
    }
};
