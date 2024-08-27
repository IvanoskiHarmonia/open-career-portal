const express = require("express");
const router = express.Router();
const {
	getAllJobsByCompany,
	getApplicationByJobIdAndCompanyId,
	rejectUserApplication,
	changeUserApplicationStatus,
} = require("../controllers/companyController");

router.get("/allJobs/:companyId", getAllJobsByCompany);
router.get("job/:jobId/company/:companyId", getApplicationByJobIdAndCompanyId);
router.patch("/job/:jobId/company/:companyId/user/:userId", rejectUserApplication);
router.patch("/job/:jobId/company/:companyId/user/:userId", changeUserApplicationStatus);

module.exports = router;
