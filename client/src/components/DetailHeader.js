import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { IMAGE_URL } from "../constants/url";
import Navbar from "./Navbar";
import { addMovie } from "../redux/actions/profileActions";

const DetailHeader = () => {
    const { movie } = useSelector(state => state.detailReducer);
    const { cast } = useSelector(state => state.castReducer);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            addMovie({
                ...movie,
                _id: movie.id,
                backdrop: movie.backdrop_path,
                poster: movie.poster_path,
                cast
            })
        );
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
                        WATCHLIST <AddIcon />
                    </button>
                </div>
            )}
        </>
    );
};

export default DetailHeader;
