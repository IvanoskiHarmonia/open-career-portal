const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(
	cors({
		origin: "http://example.com", // Allow only specific domains
		methods: "GET,POST", // Allow only these methods
		allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
	})
);

const jobs = require("./data/jobs.json");

app.get("/api/job/:jobId", (req, res) => {
	const jobId = req.params.jobId;
	const jobDescription = `${jobs[jobId]["description"]}`;
	const jobTitle = `${jobs[jobId]["title"]}`;
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
	res.send("Form data received!");
});

app.get("/api/test", (req, res) => {
	res.send("Hello from the server!");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
