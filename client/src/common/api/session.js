import axios from "axios";

export const validateUserSession = async () => {
	try {
		const response = await axios.get(`/api/session/validate`, { withCredentials: true });
		return response.data;
	} catch (error) {
		console.error("Failed to validate session:", error);
		throw error;
	}
};

export const logoutUser = async () => {
	try {
		await axios.post(`/api/session/logout`, {}, { withCredentials: true });
	} catch (error) {
		console.error("Failed to logout:", error);
		throw error;
	}
};
