const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	userId: { type: String, required: true, unique: true },
	role: { type: String, required: true },
	token: { type: String, required: true },
	expiresAt: { type: Number, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
