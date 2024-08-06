import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Not Found 404</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<Link to="/login">Go to Login </Link>
			or <Link to="/">Go to Home</Link>
		</div>
	);
};

export default NotFound;
