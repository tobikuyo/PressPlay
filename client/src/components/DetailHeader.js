import React from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../constants/url";
import Navbar from "./Navbar";

const DetailHeader = () => {
    const { movie } = useSelector(state => state.detailReducer);

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
                </div>
            )}
        </>
    );
};

export default DetailHeader;
