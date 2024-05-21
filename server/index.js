const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();

const JobApplication = require("./models/JobApplication");
const User = require("./models/User");

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

// Get all jobs GET APIs
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


// Login  

app.post("/api/session/logout", (req, res) => {
	res.send({ message: "Logged out successfully!" });
});

app.get("/api/session/validate", (req, res) => {
	res.send({ isValidSession: true });
});

app.post("/api/users/login", async (req, res) => {
	const email = req.body.email;
	try {
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({ email, userId: uuidv4() });
			await user.save();
			console.log("New user created:", user);
		} else {
			console.log("User logged in:", user);
		}
		res.send({ message: "User logged in successfully!", userId: user.userId });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).send({ message: "Error logging in user" });
	}
});

app.post("/api/job-applications", async (req, res) => {
	try {
		const jobApplication = new JobApplication({
			userId: req.body.userId, // Ensure userId is included in the request body
			...req.body,
		});
		await jobApplication.save();
		res.status(201).send(jobApplication);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.get("/api/job-applications", async (req, res) => {
	try {
		const jobApplications = await JobApplication.find();
		res.status(200).send(jobApplications);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.get("/api/job-applications/:id", async (req, res) => {
	try {
		const jobApplication = await JobApplication.findById(parseInt(req.params.id));
		if (!jobApplication) {
			return res.status(404).send({ message: "Job application not found" });
		}
		res.status(200).send(jobApplication);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.get("/api/user-applications/:userId", async (req, res) => {
	try {
		const jobApplication = await JobApplication.find({ userId: req.params.userId });
		if (!jobApplication) {
			return res.status(404).send({ message: "Job application not found" });
		}
		res.status(200).send(jobApplication);
	} catch (error) {
		res.status(400).send(error);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
