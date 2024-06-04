import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../common/hooks/useAuth";
import { LogIn } from "react-feather";
import LoginPlaceholder from "./components/LoginPlaceholder";

const Login = () => {
	const { handleLogin, loading } = useAuth();
	const navigate = useNavigate();

	const login = useGoogleLogin({
		clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		auto_select: true,
		onSuccess: async (tokenResponse) => {
			try {
				const googleUserResponse = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
					headers: {
						Authorization: `Bearer ${tokenResponse.access_token}`,
					},
				});

				const loginResponse = await axios.post(
					"http://localhost:8000/api/users/login",
					{
						token: tokenResponse.access_token,
						expiresAt: new Date().getTime() + tokenResponse.expires_in + 120 * 60 * 1000,
						email: googleUserResponse.data.email,
					},
					{ withCredentials: true }
				);

				const userId = loginResponse.data.userId;
				handleLogin(navigate, userId, tokenResponse.expires_in);
			} catch (error) {
				console.error("Failed to fetch user data or send to backend:", error);
			}
		},
		onError: (error) => {
			console.error("Login Failed:", error);
		},
	});

	if (loading) {
		return <LoginPlaceholder />;
	}

	return (
		<div className="container">
			<div className="row justify-content-center align">
				<div className="col-8">
					<div className="card my-5">
						<div className="card-body shadow">
							<h2 className="card-title text-center mb-2">Login Page</h2>
							<div className="d-flex justify-content-center">
								<button onClick={() => login()} className="btn btn-primary d-flex align-items-center">
									Google
									<LogIn size={20} className="ms-1" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
