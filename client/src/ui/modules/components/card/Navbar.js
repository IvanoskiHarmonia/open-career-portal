import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";
import { LogOut, Moon, Sun } from "react-feather";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Navbar = () => {
	const { isAuthenticated, userId, handleLogout } = useAuth();
	const [darkMode, setDarkMode] = useState(false);

	const toggleMode = () => {
		setDarkMode((prevDarkMode) => {
			const newDarkMode = !prevDarkMode;
			const html = document.querySelector("html");
			html.setAttribute("data-bs-theme", newDarkMode ? "dark" : "light");
			localStorage.setItem("darkMode", newDarkMode);
			return newDarkMode;
		});
	};

	useEffect(() => {
		const isDarkMode = localStorage.getItem("darkMode") === "true";
		setDarkMode(isDarkMode);
		const html = document.querySelector("html");
		html.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");
	}, []);

	return (
		<>
			{isAuthenticated && (
				<nav className="navbar navbar-expand-lg shadow-sm">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center w-100">
							<div className="d-flex">
								<Link to="/" className="ms-3">
									Home
								</Link>
							</div>
							<div className="d-flex align-items-center">
								<Link to={`/user-applications/${userId}`} target="_blank" rel="noopener noreferrer" className="me-3">
									Applications
								</Link>
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="logout-tooltip">Click to logout</Tooltip>}>
									<button className="btn btn-link text-decoration-none" onClick={handleLogout} aria-label="Logout">
										<LogOut />
									</button>
								</OverlayTrigger>
								<button className="btn btn-link text-decoration-none" onClick={toggleMode} aria-label="Toggle dark mode">
									{darkMode ? <Moon /> : <Sun />}
								</button>
							</div>
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;
