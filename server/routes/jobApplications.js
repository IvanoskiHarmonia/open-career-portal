const express = require("express");
const router = express.Router();
const {
	getJobApplicationById,
	getUserApplications,
	createJobApplication,
	getUserDetailsFromPreviousApplications,
} = require("../controllers/jobApplicationsController");

router.get("/:applicationId", getJobApplicationById); // TODO: This route is not used in the client
router.get("/user/:userId", getUserApplications);
router.post("/create-application", createJobApplication);
router.get("/user-details/:userId", getUserDetailsFromPreviousApplications);

module.exports = router;
