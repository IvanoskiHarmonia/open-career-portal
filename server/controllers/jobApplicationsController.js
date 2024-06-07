const JobApplication = require("../models/JobApplication");
const upload = require("../config/upload");
const fields = require("./constants/JobApplicationFields");

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
	upload.fields([
		{ name: "resume", maxCount: 1 },
		{ name: "coverLetter", maxCount: 1 },
	])(req, res, async (err) => {
		if (err) {
			console.error("File upload error:", err);
			return res.status(400).send(err.message);
		}
		try {
			const jobApplication = new JobApplication(fields(req));
			await jobApplication.save();
			res.status(201).send();
		} catch (error) {
			console.error("Job application save error:", error);
			res.status(400).send(error.message);
		}
	});
};

const getUserDetailsFromPreviousApplications = async (req, res) => {
	try {
		const jobApplication = await JobApplication.findOne({ userId: req.params.userId }).sort({ createdAt: -1 }).limit(1);
		if (!jobApplication) {
			return res.status(404).send({ message: "Job application not found" });
		}

		res.send(jobApplication);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const checkIfUserAppliedToJob = async (req, res) => {
	try {
		const jobApplication = await JobApplication.findOne({ userId: req.params.userId, jobId: req.params.jobId });
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
	checkIfUserAppliedToJob,
};
