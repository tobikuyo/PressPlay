import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IMAGE_URL } from "../constants/url";
import { addMovie, getMovieIds, removeMovie } from "../redux/actions/profileActions";
import Navbar from "./Navbar";

const DetailHeader = () => {
    const [added, setAdded] = useState(false);

    const { movie } = useSelector(state => state.detailReducer);
    const { cast } = useSelector(state => state.castReducer);
    const { ids } = useSelector(state => state.profileReducer);

    const dispatch = useDispatch();

    const newMovie = {
        ...movie,
        _id: movie.id,
        backdrop: movie.backdrop_path,
        poster: movie.poster_path,
        cast
    };

    const handleClick = () => {
        if (!added) {
            dispatch(addMovie(newMovie));
            alert(`${movie.title} has been added to your watchlist`);
        } else {
            dispatch(removeMovie(newMovie));
            alert(`${movie.title} has been removed from your watchlist`);
        }

        setAdded(!added);
    };

    useEffect(() => {
        dispatch(getMovieIds());
        ids.includes(movie.id) ? setAdded(true) : setAdded(false);
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
                        {!added ? "ADD TO WATCHLIST" : "REMOVE MOVIE"}
                    </button>
                </div>
            )}
        </>
    );
};

export default DetailHeader;
