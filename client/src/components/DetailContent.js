import React from "react";
import { useSelector } from "react-redux";

const DetailContent = () => {
    const { movie } = useSelector(state => state.detailReducer);
    return (
        <div className="content">
            <h1 className="content__title">{movie.title}</h1>
            <h2 className="content__subtitle">Overview</h2>
            <p className="content__overview">{movie.overview}</p>
        </div>
    );
};

export default DetailContent;
