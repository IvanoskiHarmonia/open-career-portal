const JobApplication = require("../models/JobApplication");

const getJobApplicationById = async (req, res) => {
	try {
		const jobApplication = await JobApplication.findById(req.params.id);
		if (!jobApplication) {
			return res.status(404).send({ message: "Job application not found" });
		}
		res.send(jobApplication);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getUserApplications = async (req, res) => {
	try {
		const jobApplications = await JobApplication.find({ userId: req.params.userId });
		if (!jobApplications) {
			return res.status(404).send({ message: "Job application not found" });
		}
		res.send(jobApplications);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const createJobApplication = async (req, res) => {
	try {
		const jobApplication = new JobApplication({
			userId: req.body.userId,
			status: "Pending",
			...req.body,
		});
		console.log("Job Application Data:", jobApplication);
		await jobApplication.save();
		res.status(201).send(jobApplication);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getUserDetailsFromPreviousApplications = async (req, res) => {
	try {
		const jobApplication = await JobApplication.findOne({ userId: req.params.userId }).sort({ signatureDate: -1 }).limit(1);
		if (!jobApplication) {
			return res.status(404).send({ message: "Job application not found" });
		}
		res.send(jobApplication);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getJobApplicationById,
	getUserApplications,
	createJobApplication,
	getUserDetailsFromPreviousApplications,
};
