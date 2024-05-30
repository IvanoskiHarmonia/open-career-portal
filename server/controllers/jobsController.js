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

const getJobByTitleOrDescription = (req, res) => {
	const job = jobs.find(
		(job) => job.title.toLowerCase() === req.params.searchTerm || job.description.toLowerCase().includes(req.params.searchTerm)
	);
	if (!job) {
		return res.status(404).send("Job not found");
	}
	res.send({ job });
};

module.exports = {
	getAllJobs,
	getJobById,
	getJobByTitleOrDescription,
};
