const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
	userId: { type: String, required: true },
	status: { type: String, required: true },
	jobId: { type: String, required: true },
	jobTitle: { type: String, required: true },
	resume: {
		data: Buffer,
		contentType: String,
	},
	coverLetter: {
		data: Buffer,
		contentType: String,
	},
	personalFirstName: { type: String, required: true },
	personalMiddleInitial: { type: String, required: false },
	personalLastName: { type: String, required: true },
	personalEmail: { type: String, required: true },
	personalPhoneNumber: { type: String, required: true },
	personalAddress1: { type: String, required: true },
	personalAddress2: { type: String, required: false },
	personalCity: { type: String, required: true },
	personalState: { type: String, required: true },
	personalZipCode: { type: String, required: true },
	personalCountry: { type: String, required: true },
	usWorkEligibility: { type: String, required: true },
	relocate: { type: String, required: true },
	felony: { type: String, required: true },
	backgroundCheck: { type: String, required: true },
	drugTest: { type: String, required: true },
	overtime: { type: String, required: true },
	weekends: { type: String, required: true },
	travel: { type: String, required: true },
	remote: { type: String, required: true },
	jobExperience: [
		{
			companyName: { type: String, required: true },
			companyJobTitle: { type: String, required: true },
			companyJobStartDate: { type: Date, required: true },
			companyJobEndDate: { type: Date, required: true },
			companyJobDescription: { type: String, required: true },
		},
	],
	educationHistory: [
		{
			schoolName: { type: String, required: true },
			schoolDegree: { type: String, required: true },
			schoolMajor: { type: String, required: true },
			schoolEnrollmentDate: { type: Date, required: true },
			schoolGraduationDate: { type: Date, required: true },
			schoolGraduated: { type: String, required: true },
			schoolGPA: { type: String, required: true },
		},
	],
	references: [
		{
			referenceRelationship: { type: String, required: true },
			referenceName: { type: String, required: true },
			referenceEmail: { type: String, required: true },
			referencePhoneNumber: { type: String, required: true },
			referenceCompany: { type: String, required: true },
		},
	],
	listOfSkills: { type: String, required: false },
	listOfCertifications: { type: String, required: false },
	gender: { type: String, required: true },
	raceEthnicity: { type: String, required: true },
	disability: { type: String, required: true },
	veteran: { type: String, required: true },
	signatureName: { type: String, required: true },
	employeeId: { type: String, required: false },
	signatureDate: { type: Date, required: true },
	createdAt: { type: Date, required: true },
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
