const mongoose = require("mongoose");

const dbUrl = process.env.NODE_ENV === "production" ? process.env.MONGODB_CLOUD_URI : process.env.MONGODB_LOCAL_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(dbUrl, {});
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log("Error connecting to MongoDB", err);
		process.exit(1);
	}
};

module.exports = connectDB;
