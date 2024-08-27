import axios from "axios";

export const getAllJobs = async () => {
	const response = await axios.get("/api/jobs");
	if (response.status !== 200) {
		const errorMessage = `Error ${response.status}: ${response.statusText}`;
		throw new Error(errorMessage);
	}

	return response.data;
};

export const getJobByTitleOrDescription = async (searchTerm) => {
	const response = await axios.get(`/api/jobs/search/${searchTerm.toLowerCase()}`);
	if (response.status !== 200) {
		const errorMessage = `Error ${response.status}: ${response.statusText}`;
		throw new Error(errorMessage);
	}
	return response.data.jobs;
};

export const getJobById = async (jobId) => {
	const response = await axios.get(`/api/jobs/${jobId}`);
	if (response.status !== 200) {
		const errorMessage = `Error ${response.status}: ${response.statusText}`;
		throw new Error(errorMessage);
	}
	return response.data.job;
}