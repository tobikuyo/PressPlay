import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { getAllMovies } from "../redux/actions/profileActions";
import { IMAGE_URL } from "../constants/url";

const Profile = () => {
    const { movieList } = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    return (
        <div className="profile">
            <Link
                to="/login"
                className="profile__logout"
                onClick={() => localStorage.removeItem("token")}
            >
                <ExitToAppIcon />
            </Link>
            <h2 className="profile__name">My Watchlist</h2>
            {!movieList.length > 0 ? (
                <p className="profile__text">You have no saved movies</p>
            ) : (
                <div className="profile__container">
                    {movieList.map(movie => (
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
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
