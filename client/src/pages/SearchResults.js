import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { POSTER_URL } from "../constants/url";
import { searchMovie } from "../redux/actions/searchActions";

const SearchResults = () => {
    const { results } = useSelector(state => state.searchReducer);
    const { query } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchMovie(query));
    }, [dispatch]);

    return (
        <div className="results">
            <h2 className="results__title">Search Results</h2>
            {!results.length > 0 ? (
                <p className="results__text">No results found</p>
            ) : (
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
            )}
        </div>
    );
};

export default SearchResults;
