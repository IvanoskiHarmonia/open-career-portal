import axios from "axios";

export const getJobApplications = async () => {
	try {
		const response = await axios.get("http://localhost:8000/api/job-applications");
		return response.data;
	} catch (error) {
		console.error("Failed to fetch job applications:", error);
		return [];
	}
};

export const getJobApplicationById = async (id) => {
	try {
		const response = await axios.get(`http://localhost:8000/api/job-applications/?_id=${id}`);
		return response.data;
	} catch (error) {
		console.error("Failed to fetch job application:", error);
		return null;
	}
};
