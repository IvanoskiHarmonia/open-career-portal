const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const ROLES = require("../utils/Roles");

const login = async (req, res) => {
	const { email, token, expiresAt } = req.body;

	if (email === "guest@guestlogin.com") {
		console.log("Logging in as guest user");
		const guestUserId = uuidv4() + "-guest";
		const tokenExpiration = new Date().getTime() + 3600 * 1000;
		res.cookie("sessionToken", "guest", { httpOnly: true, expires: new Date(tokenExpiration) });
		res.cookie("guestUserId", guestUserId, { expires: new Date(tokenExpiration) });
		return res.send({ message: "Guest user logged in successfully!", userId: guestUserId, role: ROLES.GUEST });
	}

	if (!email || !token || !expiresAt) {
		return res.status(400).send({ message: "Missing required fields" });
	}

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
