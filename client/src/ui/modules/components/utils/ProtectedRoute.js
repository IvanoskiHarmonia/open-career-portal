import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";
import SpinnerOverlay from "../loading/SpinnerOverlay";

const ProtectedRoute = ({ children, accessRole, ...rest }) => {
	const { isAuthenticated, loading, role } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading) {
			if (!isAuthenticated) {
				const redirectUrl = location.pathname + location.search;
				navigate(`/login?redirect=${encodeURIComponent(redirectUrl)}`);
			} else if (isAuthenticated && !accessRole.includes(role)) {
				navigate("/");
			}
		}
	}, [isAuthenticated, loading, location, navigate]);

	if (loading) return <div>Loading...</div>;

	return isAuthenticated && accessRole.includes(role) ? children : <SpinnerOverlay />;
};

export default ProtectedRoute;
