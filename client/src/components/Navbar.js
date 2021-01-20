import React from "react";
import Avatar from "@material-ui/core/Avatar";
import logo from "../images/logo.png";
import user from "../images/user-default.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="logo" />
            <input
                type="text"
                className="navbar__input"
                placeholder="Enter a movie title "
            />
            <Avatar src={user} alt="user" variant="square" />
        </nav>
    );
};

export default Navbar;
