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
			if (user.active === false) {
				return res.status(403).send({ message: "User account is disabled. Please contact the site maintainer to learn why." });
			}
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

		res.cookie("sessionToken", token, { httpOnly: true, expires: new Date(expiresAt) });

		res.send({ message: "User logged in successfully!", userId: user.userId, role: user.role });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).send({ message: "Error logging in user" });
	}
};

const createEmployerAccount = async (req, res) => {
	const { email, companyId } = req.body;

	if (!email || !companyId) {
		return res.status(400).send({ message: "Required fields are missing." });
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).send({ message: "This employer already exists. Just change the role of the employer" });
		}
		const user = new User({ email, userId: uuidv4(), role: ROLES.EMPLOYER, token: "", expiresAt: 0, companyId });
		await user.save();
		console.log("New employer created:", user);
		res.send({ message: "Employer account created successfully!" });
	} catch (error) {
		console.error("Error creating employer account:", error);
		res.status(500).send({ message: "Error creating employer account" });
	}
};

const changeRoleToEmployer = async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).send({ message: "This employer does not exist. Please register this employer's email." });
	}

	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		} else {
			user.role = ROLES.EMPLOYER;
			await user.save();
			console.log("User role updated to employer:", user);
		}
	} catch (error) {
		console.error("Error changing user role to employer:", error);
		res.status(500).send({ message: "Error changing user role to employer" });
	}
};

const createEmployeeAccount = async (req, res) => {
	const { email, companyId } = req.body;

	if (!email || !companyId) {
		return res.status(400).send({ message: "Required fields are missing." });
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).send({ message: "This employee already exists. Just change the role of the employee" });
		}
		const user = new User({ email, userId: uuidv4(), role: ROLES.EMPLOYEE, token: "", expiresAt: 0 });
		await user.save();
		console.log("New employee created:", user);
		res.send({ message: "Employee account created successfully!" });
	} catch (error) {
		console.error("Error creating employee account:", error);
		res.status(500).send({ message: "Error creating employee account" });
	}
};

const changeRoleToEmployee = async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).send({ message: "This employee does not exist. Please register this employee's email." });
	}

	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		} else {
			user.role = ROLES.EMPLOYEE;
			await user.save();
			console.log("User role updated to employee:", user);
		}
	} catch (error) {
		console.error("Error changing user role to employee:", error);
		res.status(500).send({ message: "Error changing user role to employee" });
	}
};

const deleteUser = async (req, res) => {
	const { email } = req.body;

	if (!email) {
		return res.status(400).send({ message: "Required fields are missing." });
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).send({ message: "User not found" });
		}
		await user.delete();
		console.log("User deleted:", user);
		res.send({ message: "User deleted successfully!" });
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).send({ message: "Error deleting user" });
	}
};

module.exports = {
	login,
	createEmployerAccount,
	changeRoleToEmployer,
	createEmployeeAccount,
	changeRoleToEmployee,
	deleteUser,
};
