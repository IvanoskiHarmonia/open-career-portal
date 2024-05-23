const express = require("express");
const router = express.Router();
const {
	getAllJobApplications,
	getJobApplicationById,
	getUserApplications,
	createJobApplication,
} = require("../controllers/jobApplicationsController");

router.get("/", getAllJobApplications);
router.get("/:id", getJobApplicationById);
router.get("/user/:userId", getUserApplications);
router.post("/", createJobApplication);

module.exports = router;
