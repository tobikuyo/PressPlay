import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IMAGE_URL } from "../constants/url";
import { addMovie, getMovieIds, removeMovie } from "../redux/actions/profileActions";
import Navbar from "./Navbar";

const DetailHeader = () => {
    const { movie } = useSelector(state => state.detailReducer);
    const { cast } = useSelector(state => state.castReducer);
    const { ids } = useSelector(state => state.profileReducer);

    const dispatch = useDispatch();

    const isSaved = ids.includes(movie.id);

    const newMovie = {
        _id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop: movie.backdrop_path,
        poster: movie.poster_path,
        cast
    };

    const handleClick = () => {
        if (!isSaved) {
            dispatch(addMovie(newMovie));
        } else {
            dispatch(removeMovie(newMovie));
        }
    };

    useEffect(() => {
        dispatch(getMovieIds());
    }, [dispatch, ids, movie.id]);

    return (
        <>
            {movie && (
                <div
                    className="spotlight"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 1)), url(${IMAGE_URL}${movie.backdrop_path})`
                    }}
                >
                    <Navbar />
                    <button onClick={handleClick} className="spotlight__btn--header">
                        {!isSaved ? "ADD TO WATCHLIST" : "REMOVE MOVIE"}
                    </button>
                </div>
            )}
        </>
    );
};

export default DetailHeader;
