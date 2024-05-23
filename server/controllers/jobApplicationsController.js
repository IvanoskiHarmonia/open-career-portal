const JobApplication = require("../models/JobApplication");

const getAllJobApplications = async (req, res) => {
	try {
		const jobApplications = await JobApplication.find();
		res.send(jobApplications);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

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
			...req.body,
		});
		await jobApplication.save();
		res.status(201).send(jobApplication);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getAllJobApplications,
	getJobApplicationById,
	getUserApplications,
	createJobApplication,
};
