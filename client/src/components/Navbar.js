import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import user from "../images/user-default.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <input
                type="text"
                className="navbar__input"
                placeholder="Enter a movie title "
            />
            <Link to="/profile">
                <Avatar src={user} alt="user" variant="square" />
            </Link>
        </nav>
    );
};

export default Navbar;
