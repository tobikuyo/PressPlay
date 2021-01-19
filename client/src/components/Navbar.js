import React from "react";
import Avatar from "@material-ui/core/Avatar";
import user from "../images/user-default.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="navbar__logo">PRESSPLAY</h2>
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
