import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../constants/url";
import {
    fetchNowPlaying,
    fetchPopular,
    fetchTopRated,
    fetchTrending
} from "../redux/actions/movieActions";

const MovieList = ({ type }) => {
    const dispatch = useDispatch();

    const { trending, popular, nowPlaying, topRated } = useSelector(
        state => state.movieReducer
    );

    const title = () => {
        switch (type) {
            case "trending":
                return type;
            case "popular":
                return type;
            case "topRated":
                return "top rated";
            default:
                return "now playing";
        }
    };

    const poster = movie => {
        return (
            <Link
                to={`/movie/${movie.id}`}
                className="movielist__link"
                key={movie.id}
            >
                <img
                    className="movielist__poster"
                    src={`${IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                />
            </Link>
        );
    };

    const fetchMovies = () => {
        switch (type) {
            case "trending":
                return trending.map(movie => poster(movie));
            case "popular":
                return popular.map(movie => poster(movie));
            case "topRated":
                return topRated.map(movie => poster(movie));
            default:
                return nowPlaying.map(movie => poster(movie));
        }
    };

    useEffect(() => {
        switch (type) {
            case "trending":
                dispatch(fetchTrending());
                break;
            case "popular":
                dispatch(fetchPopular());
                break;
            case "topRated":
                dispatch(fetchTopRated());
                break;
            default:
                dispatch(fetchNowPlaying());
        }
    }, [dispatch, type]);

    return (
        <div className="movielist">
            <h2 className="movielist__heading">{title()}</h2>
            <div className="movielist__container">{fetchMovies()}</div>
        </div>
    );
};

export default MovieList;
