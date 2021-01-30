import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../images/logo.png";
import user from "../images/user-default.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <div className="navbar__container">
                <Link to="/search">
                    <SearchIcon />
                </Link>
                <Link to="/profile">
                    <Avatar src={user} alt="user" variant="square" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
