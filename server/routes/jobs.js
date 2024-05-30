const express = require("express");
const router = express.Router();
const { getAllJobs, getJobById, getJobByTitleOrDescription } = require("../controllers/jobsController");

router.get("/", getAllJobs);
router.get("/:jobId", getJobById);
router.get("/search/:searchTerm", getJobByTitleOrDescription);

module.exports = router;
