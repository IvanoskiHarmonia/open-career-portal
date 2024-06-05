import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";

const ProtectedRoute = ({ children, ...rest }) => {
	const { isAuthenticated, loading } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading) {
			if (!isAuthenticated) {
				const redirectUrl = location.pathname + location.search;
				navigate(`/login?redirect=${encodeURIComponent(redirectUrl)}`);
			}
		}
	}, [isAuthenticated, loading, location, navigate]);

	if (loading) return <div>Loading...</div>;

	return isAuthenticated ? children : null;
};

export default ProtectedRoute;
