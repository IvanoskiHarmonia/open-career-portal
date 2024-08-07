import React, { useEffect } from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../common/hooks/useAuth";
import { IconBrandGoogle, IconUserCircle } from "@tabler/icons-react";
import LoginPlaceholder from "./components/LoginPlaceholder";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

const Login = () => {
	const { handleLogin, loading, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	const login = useGoogleLogin({
		clientId: process.env.REACT_APP_CLIENT_ID,
		onSuccess: async (tokenResponse) => {
			try {
				const googleUserResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
					headers: {
						Authorization: `Bearer ${tokenResponse.access_token}`,
					},
				});

				const loginResponse = await axios.post(
					`${apiUrl}/api/users/login`,
					{
						token: tokenResponse.access_token,
						expiresAt: new Date().getTime() + tokenResponse.expires_in + 120 * 60 * 1000,
						email: googleUserResponse.data.email,
					},
					{ withCredentials: true }
				);

				const userId = loginResponse.data.userId;
				const role = loginResponse.data.role;
				const redirectUrl = new URLSearchParams(window.location.search).get("redirect") || "/";

				handleLogin(navigate, userId, role, tokenResponse.expires_in, redirectUrl);
			} catch (error) {
				console.error("Failed to fetch user data or send to backend:", error);
			}
		},
		onError: (error) => {
			console.error("Login Failed:", error);
		},
	});

	const loginAsGuest = async () => {
		const loginResponse = await axios.post(
			`${apiUrl}/api/users/login`,
			{
				token: "guest",
				expiresAt: new Date().getTime() + 3600 * 1000,
				email: "guest@guestlogin.com",
			},
			{ withCredentials: true }
		);

		const guestUserId = loginResponse.data.userId;
		const role = loginResponse.data.role;
		handleLogin(navigate, guestUserId, role, loginResponse.expires_in, "/");
	};

	useEffect(() => {
		const env = process.env.REACT_APP_ENV;

		if (env === "development_user" && !isAuthenticated) {
			console.log("Logging in as devUserId");
			handleLogin(navigate, "devUserId", "user", 3600);
		} else if (env === "development_admin" && !isAuthenticated) {
			console.log("Logging in as devAdminId");
			handleLogin(navigate, "devAdminId", "admin", 3600);
		}

		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated, handleLogin, navigate]);

	if (loading) {
		return <LoginPlaceholder />;
	}

	if (isAuthenticated) {
		return null;
	}

	return (
		<div className="container">
			<div className="row justify-content-center align">
				<div className="col-8">
					<div className="card my-5">
						<div className="card-body shadow">
							<h2 className="card-title text-center mb-2">Login</h2>
							<div className="d-flex justify-content-center">
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="google-login-tooltip">Google Login</Tooltip>}>
									<button onClick={login} className="btn btn-outline-success d-flex align-items-center">
										<IconBrandGoogle stroke={1} size="30" />
									</button>
								</OverlayTrigger>
								<OverlayTrigger placement="bottom" overlay={<Tooltip id="guest-login-tooltip">Guest Login</Tooltip>}>
									<button onClick={loginAsGuest} className="btn btn-outline-light d-flex align-items-center ms-2">
										<IconUserCircle stroke={1} size="30" />
									</button>
								</OverlayTrigger>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
