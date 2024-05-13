// Careers.js
import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";
import JobDetails from "../../modules/components/card/JobDetails";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<QueryClientProvider client={queryClient}>
				<div className="container">
					<div className="row">
						<div className="col">
							<SidePanel />
						</div>
					</div>
				</div>
			</QueryClientProvider>
		</GoogleOAuthProvider>
	);
};

export default Careers;
