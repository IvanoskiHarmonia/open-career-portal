// Careers.js
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";
import SearchBar from "./components/search/SearchBar";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<StyleWrapper>
				<SearchBar />
				<SidePanel />
			</StyleWrapper>
		</QueryClientProvider>
	);
};

export default Careers;
