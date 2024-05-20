import React from "react";
import GoBackButton from "../utils/GoBackButton";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <GoBackButton />
            </div>
        </nav>
    );
};

export default Navbar;