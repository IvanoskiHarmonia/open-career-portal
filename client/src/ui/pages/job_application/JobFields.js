// I need to create bootstrap form fields for the following fields:
// - Resume (file upload) (Required) (Accepts .pdf, .doc, .docx, .txt)
// - Cover Letter (file upload) (Optional) (Accepts .pdf, .doc, .docx, .txt)
// - How did you hear about us? (dropdown with options: LinkedIn, Indeed, Glassdoor, Referral, Other) (Optional)
// Contact Information Section
// - First Name (text field) (Required)
// - Last Name (text field) (Required)
// - Date of Birth (date picker) (Required)
// - Email (email field) (Required)
// - Phone Number with country code (phone number field) (Required)
// - Address Line 1 (text field) (Required)
// - Address Line 2 (text field) (optional)
// - City (text field) (Required)
// - Province/State (dropdown) (Required)
// - Postal/Zip Code (text field) (Required)
// - Country/Region (dropdown) (Required)
// Work Eligibility Section
// - Are you legally eligible to work in the US? (radio buttons Yes/No) (Required)
// - Are you willing to relocate? (radio buttons Yes/No/Not Sure) (Required)
// - Have you ever been convicted of a felony? (radio buttons Yes/No) (Required)
// - If yes, please explain (text area) (Optional)
// - Are you willing to undergo a background check? (radio buttons Yes/No) (Required)
// - Are you willing to undergo a drug test? (radio buttons Yes/No) (Required)
// - Are you willing to work overtime? (radio buttons Yes/No) (Required)
// - Are you willing to work weekends? (radio buttons Yes/No) (Required)
// - Are you willing to travel? (radio buttons Yes/No) (Required)
// - Are you willing to work remotely? (radio buttons Yes/No) (Required)
// Employment History Section (Allowing the user to add multiple employment entries)
// - Company Name (text field) (Required)
// - Job Title (text field) (Required)
// - Start Date (date picker) (Required)
// - End Date (date picker) (Required)
// - Job Description (text area) (Required)
// Education Section (Allowing the user to add multiple education entries)
// - School Name (text field) (Required)
// - Degree (text field) (Required)
// - Major (text field) (Required)
// - Graduation Date (date picker) (Required)
// - GPA (number field) (Optional)
// Skills Section (Allowing the user to add multiple skills)
// - Skills (text area with comma-separated values)
// - Certifications (text area with comma-separated values (links included))
// References Section (Allowing the user to add multiple references)
// - Relationship (text field) (Required)
// - Name (text field) (Required)
// - Email (email field) (Optional)
// - Phone Number (phone number field) (Required)
// - Company (text field) (Optional)
// Information Truthfulness (Text about why it is important) (checkbox) (Required)
// Voluntary Equal Employment Opportunity Self-Identification (Text about why it is important)
// - What is your Gender (dropdown with Male/Female/Opt Out) (Required)
// - What is your Race/Ethnic background? (dropdown with options: White, Hispanic or Latino, Black or African American, Native Hawaiian or Other Pacific Islander, Asian, American Indian or Alaska Native) (Required)
// Voluntary Self-Identification of Disability section (Why are you being asked to complete this form? How do I know if I have a disability?)
// - Do you have a disability? (radio buttons with Yes/No/Opt out) (Required)
// Voluntary Self-Identification of Veteran Status section (Why are you being asked to complete this form?)
// - Are you a veteran? (radio buttons with Yes/No/Opt out) (Required)
// Signature Section
// - Your Name (text field) (Required)
// - Today's Date (date picker) (Required)
// - Checking the checkbox is equivalent to a handwritten signature (Checkbox) (Required)
// Submit Button

// Path: client/src/components/JobFields.js

import React from "react";
import {
	Resume,
	Opportunity,
	ContactInfo,
	WorkEligibility,
	EmploymentHistory,
	EducationHistory,
	JobSkills,
	References,
	InformationTruthfulness,
	SelfIdentification,
	Signature,
} from "./job_fields_sections";

import Required from "./small_blocks/Required";

function JobFields() {
	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		fetch("/api/job-application", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP Error: ${response.status || "Unknown Status"}`);
				}
				return response.text();
			})
			.then((data) => console.log(data))
			.catch((error) => {
				console.error("Fetch Error:", error);
			});
	}

	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h2>Job Application</h2>
					<form action="/api/job-application" method="post" target="_blank" onSubmit={handleSubmit}>
						<h5 className="bg-warning bg-opacity-25 text-center rounded border-1 p-2 mt-3">
							Fields with red <Required /> are required.
						</h5>

						<Resume />

						<Opportunity />

						<ContactInfo />

						<WorkEligibility />

						<EmploymentHistory />

						<EducationHistory />

						<JobSkills />

						<References />

						<InformationTruthfulness />

						<SelfIdentification />

						<Signature />

						<button type="submit" className="btn btn-primary mt-4">
							Submit Application
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default JobFields;
