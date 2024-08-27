import axios from "axios";

export const checkIfUserAppliedToJob = async (userId, jobId) => {
	try {
		const response = await axios.get(`/api/user-applications/check-application/${userId}/${jobId}`);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching job application status:", error);
	}
};

export const getUserApplications = async (userId) => {
	try {
		const response = await axios.get(`/api/user-applications/user/${userId}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching user applications:", error);
	}
};

export const getUserDetailsFromPreviousApplications = async (userId) => {
	try {
		const response = await axios.get(`/api/user-applications/user-details/${userId}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching user details from previous applications:", error);
	}
};

export const createJobApplication = async (formData) => {
	try {
		const response = await axios.post(`/api/user-applications/create-application`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response;
	} catch (error) {
		console.error("Error creating job application:", error);
	}
};
