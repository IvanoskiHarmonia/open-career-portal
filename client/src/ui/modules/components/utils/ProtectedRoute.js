import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/" />;
	}

	return children;
};

export default ProtectedRoute;