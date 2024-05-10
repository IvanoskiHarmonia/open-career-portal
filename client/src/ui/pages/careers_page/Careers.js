// Create a new component called Careers that will be used to display the careers page.

import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "../../modules/components/logic/Login";
import { getJobs } from "../../../common/api/Jobs";

const Careers = () => {
	console.log(getJobs());
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<Login />
		</GoogleOAuthProvider>
	);
};

export default Careers;
