const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
	userId: String,
	status: String,
	jobId: String,
	jobTitle: String,
	resume: Object,
	coverLetter: Object,
	personalFirstName: String,
	personalMiddleInitial: String,
	personalLastName: String,
	personalEmail: String,
	personalPhoneNumber: String,
	personalAddress1: String,
	personalAddress2: String,
	personalCity: String,
	personalState: String,
	personalZipCode: String,
	personalCountry: String,
	usWorkEligibility: String,
	relocate: String,
	felony: String,
	backgroundCheck: String,
	drugTest: String,
	overtime: String,
	weekends: String,
	travel: String,
	remote: String,
	jobExperience: [
		{
			companyName: String,
			jobTitle: String,
			jobStartDate: Date,
			jobEndDate: Date,
			jobDescription: String,
		},
	],
	educationHistory: [
		{
			schoolName: String,
			degree: String,
			major: String,
			enrollmentDate: Date,
			graduationDate: Date,
			gpa: String,
		},
	],
	references: [
		{
			referenceRelationship: String,
			referenceName: String,
			referenceEmail: String,
			referencePhoneNumber: String,
			referenceCompany: String,
		},
	],
	gender: String,
	raceEthnicity: String,
	disability: String,
	veteran: String,
	signatureName: String,
	employeeId: String,
	signatureDate: Date,
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
