const express = require("express");
const router = express.Router();
const { getAllJobs, getJobById, getJobsByTitleOrDescription } = require("../controllers/jobsController");

router.get("/", getAllJobs);
router.get("/:jobId", getJobById);
router.get("/search/:searchTerm", getJobsByTitleOrDescription);

module.exports = router;
