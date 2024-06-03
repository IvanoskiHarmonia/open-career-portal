import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";
import { LogOut, Moon, Sun } from "react-feather";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Navbar = () => {
	const { isAuthenticated, userId, handleLogout } = useAuth();
	const [darkMode, setDarkMode] = useState(false);

	const toggleMode = () => {
		setDarkMode(!darkMode);
		const html = document.querySelector("html");
		html.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
		localStorage.setItem("darkMode", !darkMode);
	};

	useEffect(() => {
		const mode = localStorage.getItem("darkMode");
		setDarkMode(mode === "true");
		const html = document.querySelector("html");
		html.setAttribute("data-bs-theme", mode ? "dark" : "light");
	}, [setDarkMode]);

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
