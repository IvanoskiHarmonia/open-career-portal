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

const getJobsByTitleOrDescription = (req, res) => {
	const searchTerm = req.params.searchTerm.toLowerCase();
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
