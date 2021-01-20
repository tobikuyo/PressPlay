import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

import Navbar from "./Navbar";
import { fetchTrending } from "../redux/actions/movieActions";
import { IMAGE_URL } from "../constants/url";

const Spotlight = () => {
    const { trending } = useSelector(state => state.movieReducer);
    const dispatch = useDispatch();

    const random = Math.floor(Math.random() * 20);
    const movie = trending[random];

    useEffect(() => {
        dispatch(fetchTrending());
    }, [dispatch]);

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
                    <div className="spotlight__container">
                        <button className="spotlight__btn">MORE INFO</button>
                        <button className="spotlight__btn">
                            WATCHLIST <AddIcon />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Spotlight;
