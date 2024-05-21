import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(() => {});
	const [userId, setUserId] = useState(() => {});

	useEffect(() => {
		validateSession();
	}, []);

	const validateSession = async () => {
		try {
			const response = await axios.get("http://localhost:8000/api/session/validate", { withCredentials: true });

			setIsAuthenticated(response.data.isValidSession);
		} catch (error) {
			console.error("Failed to validate session:", error);
		}
	};

	const handleLogin = (navigate, userId) => {
		setIsAuthenticated(true);
		setUserId(userId);
		navigate("/careers/");
	};

	const handleLogout = async () => {
		try {
			await axios.post("http://localhost:8000/api/session/logout", {}, { withCredentials: true });
			setIsAuthenticated(false);
			setUserId(null);
		} catch (error) {
			console.error("Failed to logout:", error);
		}
	};

	return <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
};
