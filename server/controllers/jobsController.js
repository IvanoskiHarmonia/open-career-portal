const jobs = require("../data/jobs.json");

const getAllJobs = (req, res) => {
	res.send(jobs);
};

const getJobById = (req, res) => {
	const job = jobs.find((job) => job.id === parseInt(req.params.jobId));
	if (!job) {
		return res.status(404).send("Job not found");
	}
	res.send({ job });
};

module.exports = {
	getAllJobs,
	getJobById,
};
