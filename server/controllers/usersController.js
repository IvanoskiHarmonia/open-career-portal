const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const ROLES = require("../utils/Roles");

const login = async (req, res) => {
	const { email, token, expiresAt } = req.body;

	try {
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({ email, userId: uuidv4(), role: ROLES.USER, token, expiresAt });
			await user.save();
			console.log("New user created:", user);
		} else {
			if (user.role === undefined) {
				user.role = ROLES.USER;
				await user.save();
				console.log("User role updated:", user);
			}
			if (user.token !== token || user.expiresAt < new Date().getTime()) {
				user.token = token;
				user.expiresAt = expiresAt;
				await user.save();
				console.log("User token updated:", user);
			}
			console.log("User logged in:", user);
		}

		// Set the session token in a cookie
		res.cookie("sessionToken", token, { httpOnly: true, expires: new Date(expiresAt) });

		res.send({ message: "User logged in successfully!", userId: user.userId, role: user.role });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).send({ message: "Error logging in user" });
	}
};

module.exports = {
	login,
};
