import React from "react";
import GoBackButton from "../utils/GoBackButton";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<GoBackButton />
				<Link to="/user-applications/:userId" className="navbar-brand">
					Applications
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
