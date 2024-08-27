const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	companyId: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	description: { type: String },
	logo: { type: String },
	website: { type: String },
	industry: { type: String },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
