import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../constants/url";
import { fetchTrending } from "../redux/actions/movieActions";

const MovieList = () => {
    const { trending } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTrending());
    }, [dispatch]);

    return (
        <div className="movielist">
            <h2 className="movielist__heading">Trending</h2>
            <div className="movielist__container">
                {trending.map(movie => (
                    <img
                        className="movielist__poster"
                        src={`${IMAGE_URL}${movie.poster_path}`}
                        alt={movie.title}
                        key={movie.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
