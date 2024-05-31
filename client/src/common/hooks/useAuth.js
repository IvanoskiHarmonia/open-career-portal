import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const validateSession = useCallback(async () => {
		console.log("Validating session...");
		try {
			const response = await axios.get("http://localhost:8000/api/session/validate", { withCredentials: true });
			if (response.data.isValidSession) {
				console.log("Session is valid");
				setIsAuthenticated(true);
				setUserId(response.data.userId);
				localStorage.setItem("tokenExpiry", Date.now() + response.data.expiresIn * 1000);
			} else {
				console.log("Session is not valid");
				setIsAuthenticated(false);
				setUserId(null);
				navigate("/login");
			}
		} catch (error) {
			console.error("Failed to validate session:", error);
			setIsAuthenticated(false);
			setUserId(null);
			navigate("/login");
		} finally {
			setLoading(false);
		}
	}, [navigate]);

	const handleLogout = useCallback(async () => {
		console.log("Logging out...");
		try {
			await axios.post("http://localhost:8000/api/session/logout", {}, { withCredentials: true });
			setIsAuthenticated(false);
			setUserId(null);
			localStorage.removeItem("userId");
			localStorage.removeItem("tokenExpiry");
			navigate("/login");
			console.log("Logout successful");
		} catch (error) {
			console.error("Failed to logout:", error);
		}
	}, [navigate]);

	const handleLogin = (navigate, userId, expiresIn) => {
		setIsAuthenticated(true);
		setUserId(userId);
		localStorage.setItem("tokenExpiry", Date.now() + expiresIn * 1000);
		navigate("/");
	};

	useEffect(() => {
		validateSession();

		// const handleBeforeUnload = () => {
		// 	navigator.sendBeacon("/api/session/logout");
		// };

		let idleTimeout;

		const resetIdleTimer = () => {
			clearTimeout(idleTimeout);
			idleTimeout = setTimeout(() => {
				handleLogout();
			}, 30 * 60 * 1000); // 30 minutes
		};

		// window.addEventListener("beforeunload", handleBeforeUnload);
		window.addEventListener("mousemove", resetIdleTimer);
		window.addEventListener("keypress", resetIdleTimer);

		resetIdleTimer();

		return () => {
			clearTimeout(idleTimeout);
			// window.removeEventListener("beforeunload", handleBeforeUnload);
			window.removeEventListener("mousemove", resetIdleTimer);
			window.removeEventListener("keypress", resetIdleTimer);
		};
	}, [handleLogout, validateSession]);

	return (
		<AuthContext.Provider value={{ isAuthenticated, userId, handleLogout, handleLogin, loading }}>{!loading && children}</AuthContext.Provider>
	);
};
