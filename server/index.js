const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");

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
	console.log("User logged out");
});

app.use(cookieParser());

app.get("/api/session/validate", async (req, res) => {
	const token = req.cookies.sessionToken;

	if (!token) {
		console.log("No token found in cookies");
		return res.send({ isValidSession: false });
	}

	try {
		const user = await User.findOne({ token });
		if (user && user.expiresAt > new Date().getTime()) {
			return res.send({ isValidSession: true, userId: user.userId });
		} else {
			return res.send({ isValidSession: false });
		}
	} catch (error) {
		console.error("Error validating session:", error);
		return res.status(500).send({ isValidSession: false });
	}
});

app.post("/api/users/login", async (req, res) => {
	const { email, token, expiresAt } = req.body;

	try {
		let user = await User.findOne({ email });
		if (!user) {
			user = new User({ email, userId: uuidv4(), token, expiresAt });
			await user.save();
			console.log("New user created:", user);
		} else {
			if (user.token !== token || user.expiresAt < new Date().getTime()) {
				user.token = token;
				user.expiresAt = expiresAt;
				await user.save();
				console.log("User token updated:", user);
			}
			console.log("User logged in:", user);
		}

		// Set the session token in a cookie
		res.cookie("sessionToken", token, { httpOnly: true, expires: new Date(expiresAt) });

		res.send({ message: "User logged in successfully!", userId: user.userId });
	} catch (error) {
		console.error("Error logging in user:", error);
		res.status(500).send({ message: "Error logging in user" });
	}
});

app.post("/api/job-applications", async (req, res) => {
	try {
		const jobApplication = new JobApplication({
			userId: req.body.userId,
			...req.body,
		});
		console.log("Job application received:", jobApplication);
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
