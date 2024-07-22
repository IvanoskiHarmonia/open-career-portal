const User = require("../models/User");

const validateSession = async (req, res) => {
	const token = req.cookies.sessionToken;

	if (process.env.NODE_ENV === "development_user") {
		return res.send({ isValidSession: true, userId: "devUserId", role: "user" });
	}

	if (process.env.NODE_ENV === "development_admin") {
		return res.send({ isValidSession: true, userId: "devAdminId", role: "admin" });
	}

	if (!token) {
		console.log("No token found in cookies");
		return res.send({ isValidSession: false, message: "No token found in cookies" });
	}

	try {
		const user = await User.findOne({ token });
		if (user && user.expiresAt > new Date().getTime()) {
			return res.send({ isValidSession: true, userId: user.userId, role: user.role });
		} else {
			console.log("Token expired or user not found");
			return res.send({ isValidSession: false });
		}
	} catch (error) {
		console.error("Error validating session:", error);
		return res.status(500).send({ isValidSession: false });
	}
};

const logout = (req, res) => {
	res.clearCookie("sessionToken");

	res.send({ message: "Logged out successfully!" });
	console.log("User logged out");
};

module.exports = {
	validateSession,
	logout,
};
