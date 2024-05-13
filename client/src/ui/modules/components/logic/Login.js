import { useGoogleOneTapLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Login() {
	console.log("Login component loaded!");
	useGoogleOneTapLogin({
		clientId: process.env.REACT_APP_CLIENT_ID,
		onSuccess: (response) => {
			const decodedToken = jwtDecode(response.credential);
			console.log(decodedToken.email + " logged in successfully!");

			fetch("/api/save-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: decodedToken.email }),
			})
				.then((response) => response.json())
				.then((data) => {
					console.log("Email sent successfully:", data);
				})
				.catch((error) => {
					console.error("Failed to send email:", error);
				});
		},
		onFailure: (response) => {
			console.log("Login Failed:", response);
		},
	});

	// This component doesn't render anything
	window.location.href = "/careers";

	return null;
}

export default Login;
