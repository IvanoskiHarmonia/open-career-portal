const Job = require("../models/Job");
const Company = require("../models/Company");

const createCompany = async (req, res) => {
	const { companyId, name, description, logo, website, industry } = req.body;
	const company = new Company({
		companyId,
		name,
		description,
		logo,
		website,
		industry,
	});
	await company.save();
	res.send(company);
};

const getAllJobsByCompany = async (req, res) => {
	const companyId = req.params.companyId;
	const company = await Company.findById(companyId);
	if (!company) {
		return res.status(404).send({ message: "Company not found" });
	}

	const jobs = await Job.find({ companyId });
	res.send(jobs);
};

const getApplicationByJobIdAndCompanyId = async (req, res) => {};

const rejectUserApplication = async (req, res) => {};

const changeUserApplicationStatus = async (req, res) => {};

module.exports = {
	getAllJobsByCompany,
	getApplicationByJobIdAndCompanyId,
	rejectUserApplication,
	changeUserApplicationStatus,
};
