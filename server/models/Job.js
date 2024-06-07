const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
	id: Number,
	title: String,
	company: String,
	description: String,
	date_created: Date,
	date_updated: Date,
	location: String,
	type: String,
	salary: String,
	requirements: [String],
	responsibilities: [String],
	benefits: [String],
	application_deadline: Date,
	contact_information: {
		email: String,
		phone: String,
	},
	job_category: String,
	experience_level: String,
	education: String,
	company_logo: String,
	remote: Boolean,
	how_to_apply: String,
});

// Create a model
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
