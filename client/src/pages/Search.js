import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchMovie } from "../redux/actions/searchActions";

const Search = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleChanges = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(searchMovie(query));
        setQuery("");
        push("/search/results");
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search__input"
                placeholder="Enter a movie title"
                value={query}
                onChange={handleChanges}
                autoFocus
            />
        </form>
    );
};

export default Search;
