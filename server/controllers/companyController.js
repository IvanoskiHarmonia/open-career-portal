const Job = require("../models/Job");
const Company = require("../models/Company");
const JobApplication = require("../models/JobApplication");

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

const getApplicationByJobIdAndCompanyId = async (req, res) => {
	const { jobId, companyId } = req.params;
	const job = await Job.findOne({ id: jobId, companyId });
	if (!job) {
		return res.status(404).send({ message: "Job not found" });
	}

	const applications = await JobApplication.find({ jobId, companyId });
	res.send(applications);
};

const rejectUserApplication = async (req, res) => {
	const { jobId, companyId, userId } = req.params;
	const jobApplication = await JobApplication.findOne({ jobId, companyId, userId });
	if (!jobApplication) {
		return res.status(404).send({ message: "Application not found" });
	}

	jobApplication.status = "rejected";
	await jobApplication.save();
	res.send(jobApplication);
};

const changeUserApplicationStatus = async (req, res) => {
	const { jobId, companyId, userId } = req.params;
	const { status } = req.body;
	const jobApplication = await JobApplication.findOne({ jobId, companyId, userId });
	if (!jobApplication) {
		return res.status(404).send({ message: "Application not found" });
	}

	jobApplication.status = status;
	await jobApplication.save();
	res.send(jobApplication);
};

module.exports = {
	getAllJobsByCompany,
	getApplicationByJobIdAndCompanyId,
	rejectUserApplication,
	changeUserApplicationStatus,
};
