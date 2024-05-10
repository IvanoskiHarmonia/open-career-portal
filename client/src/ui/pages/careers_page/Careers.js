// Careers.js
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidePanel from "./components/SidePanel";
import JobDetails from "../../modules/components/card/JobDetails";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<QueryClientProvider client={queryClient}>
				<div className="container">
					<div className="row">
						<SidePanel />
						<Routes>
							<Route path="/careers/:jobId" element={<JobDetails />} />
							<Route
								path="/careers"
								element={
									<div className="col-md-8">
										<h3>Job Description</h3>
										<p>Select a job to view the description.</p>
									</div>
								}
							/>
						</Routes>
					</div>
				</div>
			</QueryClientProvider>
		</GoogleOAuthProvider>
	);
};

export default Careers;
