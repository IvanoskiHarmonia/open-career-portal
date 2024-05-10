// API call to get all the jobs from the server

import axios from "axios";

export const getJobs = async () => {
	const response = await axios.get("/api/jobs");
	if (response.status !== 200) {
		const errorMessage = `Error ${response.status}: ${response.statusText}`;
		throw new Error(errorMessage);
	}
	try {
		const data = await response.data;
		return data;
	} catch (err) {
		console.error("Failed to parse JSON:", err);
		throw new Error("Failed to parse response data.");
	}
};
