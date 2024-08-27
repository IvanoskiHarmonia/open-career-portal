const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
	const jobs = await Job.find({});
	res.send(jobs);
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

const createNewJob = async (req, res) => {
	const {
		title,
		company,
		companyId,
		description,
		location,
		type,
		salary,
		requirements,
		responsibilities,
		benefits,
		application_deadline,
		contact_information,
		job_category,
		experience_level,
		education,
		company_logo,
		remote,
		how_to_apply,
	} = req.body;

	const job = new Job({
		id: Math.floor(Math.random() * 1000000000),
		title,
		company,
		companyId,
		description,
		date_created: new Date(),
		date_updated: new Date(),
		location,
		type,
		salary,
		requirements,
		responsibilities,
		benefits,
		application_deadline,
		contact_information,
		job_category,
		experience_level,
		education,
		company_logo,
		remote,
		how_to_apply,
	});

	await job.save();
	res.send(job);
};

const updateJob = async (req, res) => {
	const jobId = parseInt(req.params.jobId);
	const job = await Job.findOne({ id: jobId });
	if (!job) {
		return res.status(404).send("Job not found");
	}

	const {
		title,
		company,
		companyId,
		description,
		location,
		type,
		salary,
		requirements,
		responsibilities,
		benefits,
		application_deadline,
		contact_information,
		job_category,
		experience_level,
		education,
		company_logo,
		remote,
		how_to_apply,
	} = req.body;

	job.title = title;
	job.company = company;
	job.companyId = companyId;
	job.description = description;
	job.date_updated = new Date();
	job.location = location;
	job.type = type;
	job.salary = salary;
	job.requirements = requirements;
	job.responsibilities = responsibilities;
	job.benefits = benefits;
	job.application_deadline = application_deadline;
	job.contact_information = contact_information;
	job.job_category = job_category;
	job.experience_level = experience_level;
	job.education = education;
	job.company_logo = company_logo;
	job.remote = remote;
	job.how_to_apply = how_to_apply;

	await job.save();
	res.send(job);
};

module.exports = {
	getAllJobs,
	getJobById,
	getJobsByTitleOrDescription,
	createNewJob,
	updateJob,
};
