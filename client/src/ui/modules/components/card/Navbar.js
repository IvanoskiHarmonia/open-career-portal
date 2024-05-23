import React from "react";
import GoBackButton from "../utils/GoBackButton";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";

const Navbar = () => {
	const { isAuthenticated, userId } = useAuth();

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				{isAuthenticated && (
					<div className="d-flex justify-content-between align-items-center w-100">
						<div className="d-flex">
							<GoBackButton />
							<Link to="/" className="ms-3">
								Home
							</Link>
						</div>
						<Link to={`/user-applications/${userId}`}>Applications</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
