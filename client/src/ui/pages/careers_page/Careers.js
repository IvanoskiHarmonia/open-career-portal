// Careers.js
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<main className="container my-4">
				<div className="row">
					<SidePanel />
				</div>
			</main>
		</QueryClientProvider>
	);
};

export default Careers;
