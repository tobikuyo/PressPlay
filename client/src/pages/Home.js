import React from "react";
import MovieList from "../components/MovieList";
import Spotlight from "../components/Spotlight";

const Home = () => {
    return (
        <div className="home">
            <Spotlight />
            <MovieList />
        </div>
    );
};

export default Home;
