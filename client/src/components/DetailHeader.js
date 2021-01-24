import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../constants/url";
import { addMovie, removeMovie } from "../redux/actions/profileActions";
import Navbar from "./Navbar";

const DetailHeader = () => {
    const [added, setAdded] = useState(false);
    const { movie } = useSelector(state => state.detailReducer);
    const { cast } = useSelector(state => state.castReducer);
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
        } else {
            dispatch(removeMovie(newMovie));
        }

        setAdded(!added);
    };

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
                        {!added ? "ADD TO WATCHLIST" : "REMOVE"}
                    </button>
                </div>
            )}
        </>
    );
};

export default DetailHeader;
