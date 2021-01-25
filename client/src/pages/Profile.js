import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies } from "../redux/actions/profileActions";
import { IMAGE_URL } from "../constants/url";

const Profile = () => {
    const { movieList } = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    const poster = movie => {
        if (!movieList.length > 0) {
            return <p className="profile__text">You have no saved movies</p>;
        } else {
            return (
                <Link
                    to={`/movie/${movie._id}`}
                    className="profile__link"
                    key={movie._id}
                >
                    <img
                        src={`${IMAGE_URL}${movie.poster}`}
                        alt={movie.title}
                        className="profile__movie"
                    />
                </Link>
            );
        }
    };

    return (
        <div className="profile">
            <h2 className="profile__name">My Watchlist</h2>
            <div className="profile__container">
                {movieList.map(movie => poster(movie))}
            </div>
        </div>
    );
};

export default Profile;
