import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SidePanel from "./components/SidePanel";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";
import SearchBar from "./components/search/SearchBar";
import { useAuth } from "../../../common/hooks/useAuth";

const queryClient = new QueryClient();

const Careers = () => {
	const { role } = useAuth();
	const [jobs, setJobs] = useState([]);
	const [message, setMessage] = useState("");

	return (
		<QueryClientProvider client={queryClient}>
			<StyleWrapper>
				{role === "user" && <p className="text-2xl font-bold text-center mt-8">User Careers</p>}
				{role === "admin" && <p className="text-2xl font-bold text-center mt-8">Admin Careers</p>}
				<SearchBar jobs={jobs} setJobs={setJobs} setMessage={setMessage} />
				<SidePanel jobs={jobs} setJobs={setJobs} message={message} />
			</StyleWrapper>
		</QueryClientProvider>
	);
};

export default Careers;
