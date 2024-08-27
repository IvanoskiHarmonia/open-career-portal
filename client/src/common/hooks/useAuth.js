import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { validateUserSession, logoutUser } from "../api/session";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userId, setUserId] = useState(null);
	const [role, setRole] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();

	const validateSession = useCallback(async () => {
		console.log("Validating session...");
		const publicPaths = ["/terms-of-service", "/privacy-policy"];
		if (publicPaths.includes(location.pathname)) {
			setLoading(false);
			return;
		}
		try {
			const response = await validateUserSession();
			if (response.isValidSession) {
				console.log("Session is valid");
				setIsAuthenticated(true);
				setUserId(response.userId);
				setRole(response.role);
				localStorage.setItem("tokenExpiry", Date.now() + response.expiresIn * 1001);
			} else {
				console.log("Session is not valid");
				setIsAuthenticated(false);
				setUserId(null);
				setRole(null);
				const redirectPath = window.location.pathname === "/login" ? "/" : window.location.pathname;
				navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`);
			}
		} catch (error) {
			console.error("Failed to validate session:", error);
			setIsAuthenticated(false);
			setUserId(null);
			setRole(null);
			const redirectPath = window.location.pathname === "/login" ? "/" : window.location.pathname;
			navigate(`/login?redirect=${encodeURIComponent(redirectPath)}`);
		} finally {
			setLoading(false);
		}
	}, [navigate, location.pathname]);

	const handleLogout = useCallback(async () => {
		console.log("Logging out...");
		try {
			await logoutUser();
			setIsAuthenticated(false);
			setUserId(null);
			setRole(null);
			localStorage.removeItem("tokenExpiry");
			navigate("/login");
			console.log("Logout successful");
		} catch (error) {
			console.error("Failed to logout:", error);
		}
	}, [navigate]);

	const handleLogin = (navigate, userId, role, expiresIn, redirectURL = "/") => {
		setIsAuthenticated(true);
		setUserId(userId);
		setRole(role);
		localStorage.setItem("tokenExpiry", Date.now() + expiresIn * 1000);
		console.log(`Navigating to ${redirectURL}`);
		navigate(redirectURL);
	};

	useEffect(() => {
		validateSession();

		let idleTimeout;

		const resetIdleTimer = () => {
			clearTimeout(idleTimeout);
			idleTimeout = setTimeout(() => {
				handleLogout();
			}, 120 * 60 * 1000);
		};

		window.addEventListener("mousemove", resetIdleTimer);
		window.addEventListener("keypress", resetIdleTimer);
		resetIdleTimer();

		return () => {
			clearTimeout(idleTimeout);
			window.removeEventListener("mousemove", resetIdleTimer);
			window.removeEventListener("keypress", resetIdleTimer);
		};
	}, [handleLogout, validateSession]);

	return (
		<AuthContext.Provider value={{ isAuthenticated, userId, role, handleLogout, handleLogin, loading }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
