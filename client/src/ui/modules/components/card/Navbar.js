import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";
import { LogOut, Moon, Sun, Home, List } from "react-feather";
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
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="home-tooltip">Home</Tooltip>}>
									<button className="btn btn-link text-decoration-none" aria-label="Home">
										<Link to="/">
											<Home />
										</Link>
									</button>
								</OverlayTrigger>
							</div>
							<div className="d-flex align-items-center">
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="applications-tooltip">Applications</Tooltip>}>
									<button className="btn btn-link text-decoration-none" aria-label="Applications">
										<Link to={`/user-applications/${userId}`} target="_blank" rel="noopener noreferrer">
											<List />
										</Link>
									</button>
								</OverlayTrigger>
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="logout-tooltip">Click to logout</Tooltip>}>
									<button className="btn btn-link text-decoration-none" onClick={handleLogout} aria-label="Logout">
										<LogOut />
									</button>
								</OverlayTrigger>
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="mode-tooltip">Toggle mode</Tooltip>}>
									<button className="btn btn-link text-decoration-none" onClick={toggleMode} aria-label="Toggle dark mode">
										{darkMode ? <Moon /> : <Sun />}
									</button>
								</OverlayTrigger>
							</div>
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

export default Navbar;
