import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState(null);
	const [loading, setLoading] = useState(true);
	const location = useLocation();
	const navigate = useNavigate();

	const checkTokenExpiry = (expiresAt) => {
		return expiresAt < Date.now();
	};

	const validateSession = useCallback(async () => {
		try {
			const response = await axios.get("http://localhost:8000/api/session/validate", { withCredentials: true });
			if (response.data.isValidSession) {
				setIsAuthenticated(true);
				setUserId(response.data.userId);
				localStorage.setItem("tokenExpiry", Date.now() + response.data.expiresIn * 1000);
				if (location.pathname === "/login") {
					navigate("/");
				}
			} else {
				setIsAuthenticated(false);
				setUserId(null);
			}
		} catch (error) {
			console.error("Failed to validate session:", error);
			setIsAuthenticated(false);
			setUserId(null);
		} finally {
			setLoading(false);
		}
	}, [location.pathname, navigate]);

	const handleLogout = async () => {
		try {
			await axios.post("http://localhost:8000/api/session/logout", {}, { withCredentials: true });
			setIsAuthenticated(false);
			setUserId(null);
			localStorage.removeItem("userId");
			localStorage.removeItem("tokenExpiry");
		} catch (error) {
			console.error("Failed to logout:", error);
		}
	};

	useEffect(() => {
		const tokenExpiry = localStorage.getItem("tokenExpiry");

		if (!tokenExpiry || checkTokenExpiry(Number(tokenExpiry))) {
			console.log("Token is either not present or expired:", tokenExpiry);
			if (location.pathname !== "/login") {
				handleLogout();
			}
		} else {
			validateSession();
		}

		const handleBeforeUnload = () => {
			navigator.sendBeacon("/api/session/logout"); // Use sendBeacon for a simple logout signal
		};

		let idleTimeout;

		const resetIdleTimer = () => {
			clearTimeout(idleTimeout);
			idleTimeout = setTimeout(() => {
				handleLogout();
			}, 15 * 60 * 1000);
		};

		window.addEventListener("beforeunload", handleBeforeUnload);
		window.addEventListener("mousemove", resetIdleTimer);
		window.addEventListener("keypress", resetIdleTimer);

		resetIdleTimer();

		return () => {
			clearTimeout(idleTimeout);
			window.removeEventListener("beforeunload", handleBeforeUnload);
			window.removeEventListener("mousemove", resetIdleTimer);
			window.removeEventListener("keypress", resetIdleTimer);
		};
	}, [location.pathname, validateSession]);

	const handleLogin = (navigate, userId, expiresIn) => {
		setIsAuthenticated(true);
		setUserId(userId);
		localStorage.setItem("tokenExpiry", Date.now() + expiresIn * 1000);
		console.log("User ID:", userId);
		navigate("/");
	};

	return <AuthContext.Provider value={{ isAuthenticated, userId, loading, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
};
