// Careers.js
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";
import SearchBar from "./components/search/SearchBar";

const queryClient = new QueryClient();

const Careers = () => {
	const [jobs, setJobs] = useState([]);

	return (
		<QueryClientProvider client={queryClient}>
			<StyleWrapper>
				<SearchBar setJobs={setJobs} />
				<SidePanel jobs={jobs} />
			</StyleWrapper>
		</QueryClientProvider>
	);
};

export default Careers;
