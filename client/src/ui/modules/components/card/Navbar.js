import React, { useEffect } from "react";
import GoBackButton from "../utils/GoBackButton";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";

const Navbar = () => {
	const { isAuthenticated, loading } = useAuth();

	useEffect(() => {
		if (!loading) {
			if (!isAuthenticated) {
				window.location.href = "/";
			}
		}
	});

	if (loading) return null;

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				{isAuthenticated && (
					<div className="row">
						<div className="col-6">
							<GoBackButton />
						</div>
						<div className="col-6">
							<Link to="/user-applications/:userId" className="navbar-brand">
								Applications
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
