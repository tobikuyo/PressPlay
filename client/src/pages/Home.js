import React from "react";
import MovieList from "../components/MovieList";
import Spotlight from "../components/Spotlight";

const Home = () => {
    return (
        <div className="home">
            <Spotlight />
            <MovieList type="trending" />
            <MovieList type="popular" />
            <MovieList type="topRated" />
            <MovieList type="nowPlaying" />
        </div>
    );
};

export default Home;
