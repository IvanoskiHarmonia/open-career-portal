// API call to get all the jobs from the server

import axios from "axios";

export const getJobs = async () => {
	const response = await axios.get("/api/jobs");
	return response.data;
};
