const mongoose = require("mongoose");
const Company = require("./Company");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	userId: { type: String, required: true, unique: true },
	active: { type: Boolean, required: true, default: true },
	role: { type: String, required: true },
	token: { type: String, required: true },
	expiresAt: { type: Number, required: true },
	companyId: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
