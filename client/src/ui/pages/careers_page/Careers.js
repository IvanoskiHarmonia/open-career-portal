// Careers.js
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="container">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<SidePanel />
					</div>
				</div>
			</div>
		</QueryClientProvider>
	);
};

export default Careers;
