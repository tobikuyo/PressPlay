import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POSTER_URL } from "../constants/url";

const SearchResults = () => {
    const { results } = useSelector(state => state.searchReducer);

    return (
        <div className="results">
            <h2 className="results__title">Search Results</h2>
            <div className="results__container">
                {results.map(
                    movie =>
                        movie.poster_path && (
                            <Link
                                to={`/movie/${movie.id}`}
                                className="results__link"
                                key={movie.id}
                            >
                                <img
                                    src={`${POSTER_URL}${movie.poster_path}`}
                                    alt={movie.title}
                                    className="results__movie"
                                />
                            </Link>
                        )
                )}
            </div>
        </div>
    );
};

export default SearchResults;
