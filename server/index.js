const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
	cors({
		origin: "http://example.com",
		methods: "GET,POST",
		allowedHeaders: "Content-Type,Authorization",
	})
);

const jobs = require("./data/jobs.json");

function findJobById(jobId) {
	return jobs.find((job) => job.id === jobId);
}

app.get("/api/jobs", (req, res) => {
	res.send(jobs);
});

app.get("/api/job/:jobId", (req, res) => {
	const job = findJobById(parseInt(req.params.jobId));
	if (!job) {
		res.status(404).send("Job not found");
		return;
	}
	const jobDescription = `${job["description"]}`;
	const jobTitle = `${job["title"]}`;
	res.send({ description: jobDescription, title: jobTitle });
});

app.post("/api/save-email", (req, res) => {
	const email = req.body.email;
	console.log(`Sending email to ${email}`);
	res.send({ message: "Email sent successfully!" });
});

app.post("/api/job-application", (req, res) => {
	const data = req.body;
	console.log(data);
	console.log("companyName-1:", data["companyName-1"]);
	res.send("Form data received!");
});

app.get("/api/test", (req, res) => {
	res.send("Hello from the server!");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
