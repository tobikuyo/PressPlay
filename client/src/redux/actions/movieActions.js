import axiosInstance from "../../api/movies";
import {
    FETCH_TRENDING,
    FETCH_POPULAR,
    FETCH_TOP_RATED,
    FETCH_NOW_PLAYING
} from "../../constants/actions";

import {
    POPULAR_URL,
    TRENDING_URL,
    TOP_RATED_URL,
    NOW_PLAYING_URL
} from "../../constants/url";

export const fetchTrending = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get(TRENDING_URL);
        dispatch({ type: FETCH_TRENDING, payload: data.results });
    } catch (error) {
        console.log("FETCH TRENDING", error);
    }
};

export const fetchPopular = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get(POPULAR_URL);
        dispatch({ type: FETCH_POPULAR, payload: data.results });
    } catch (error) {
        console.log("FETCH POPULAR", error);
    }
};

export const fetchTopRated = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get(TOP_RATED_URL);
        dispatch({ type: FETCH_TOP_RATED, payload: data.results });
    } catch (error) {
        console.log("FETCH TOP RATED", error);
    }
};

export const fetchNowPlaying = () => async dispatch => {
    try {
        const { data } = await axiosInstance.get(NOW_PLAYING_URL);
        dispatch({ type: FETCH_NOW_PLAYING, payload: data.results });
    } catch (error) {
        console.log("FETCH NOW PLAYING", error);
    }
};
