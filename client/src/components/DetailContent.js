import React from "react";
import { useSelector } from "react-redux";

const DetailContent = () => {
    const { movie } = useSelector(state => state.detailReducer);

    return (
        <>
            {movie && (
                <div className="content">
                    <h1 className="content__title">{movie.title}</h1>
                    <p className="content__overview">{movie.overview}</p>
                </div>
            )}
        </>
    );
};

export default DetailContent;
