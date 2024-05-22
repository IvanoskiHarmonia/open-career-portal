// Careers.js
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";

const queryClient = new QueryClient();

const Careers = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<StyleWrapper>
				<SidePanel />
			</StyleWrapper>
		</QueryClientProvider>
	);
};

export default Careers;
