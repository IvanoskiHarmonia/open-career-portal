const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
	const jobsDB = await Job.find({});
	res.send(jobsDB);
};

const getJobById = async (req, res) => {
	const jobId = parseInt(req.params.jobId);
	const job = await Job.findOne({ id: jobId });
	if (!job) {
		return res.status(404).send("Job not found");
	}
	res.send({ job });
};

const getJobsByTitleOrDescription = async (req, res) => {
	const searchTerm = req.params.searchTerm.toLowerCase();
	const jobs = await Job.find({});
	const matchingJobs = jobs.filter((job) => job.title.toLowerCase().includes(searchTerm) || job.description.toLowerCase().includes(searchTerm));
	if (matchingJobs.length === 0) {
		return res.status(404).send("No jobs found");
	}
	res.send({ jobs: matchingJobs });
};

module.exports = {
	getAllJobs,
	getJobById,
	getJobsByTitleOrDescription,
};
