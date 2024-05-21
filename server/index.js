const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const JobApplication = require("./models/JobApplication");

const PORT = process.env.PORT || 8000;

const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB", err);
	});

const corsOptions = {
	origin: "http://localhost:3000",
	credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
});

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

app.post("/api/session/logout", (req, res) => {
	res.send({ message: "Logged out successfully!" });
});

app.get("/api/session/validate", (req, res) => {
	res.send({ isValidSession: true });
});

app.post("/api/users/login", (req, res) => {
	console.log("User logged in", req.body.email);
	res.send({ message: "User logged in successfully!" });
});

app.post("/api/save-email", (req, res) => {
	const email = req.body.email;
	console.log(`Sending email to ${email}`);
	res.send({ message: "Email sent successfully!" });
});

app.post("/api/job-application", async (req, res) => {
	try {
		const jobApplication = new JobApplication(req.body);
		await jobApplication.save();
		res.status(201).send(jobApplication);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.get("/api/test", (req, res) => {
	res.send("Hello from the server!");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
