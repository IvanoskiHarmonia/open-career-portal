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
import { useState } from "react";

const Required = () => <span className="text-danger">*</span>;

function JobFields() {
	const [employmentHistory, setEmploymentHistory] = useState([{ companyName: "", jobTitle: "", startDate: "", endDate: "", jobDescription: "" }]);
	const [educationHistory, setEducationHistory] = useState([{ schoolName: "", degree: "", major: "", graduationDate: "", gpa: "" }]);
	const [references, setReferences] = useState([{ relationship: "", name: "", email: "", phoneNumber: "", company: "" }]);

	// Handler to add new employment history entry
	const addEmploymentHistory = () => {
		setEmploymentHistory([...employmentHistory, { companyName: "", jobTitle: "", startDate: "", endDate: "", jobDescription: "" }]);
	};

	// Handler to add new education history entry
	const addEducationHistory = () => {
		setEducationHistory([...educationHistory, { schoolName: "", degree: "", major: "", graduationDate: "", gpa: "" }]);
	};

	// Handler to add new reference entry
	const addReference = () => {
		setReferences([...references, { relationship: "", name: "", email: "", phoneNumber: "", company: "" }]);
	};

	// Handlers to capture changes in each input field
	const handleEmploymentChange = (index, event) => {
		const values = [...employmentHistory];
		values[index][event.target.name] = event.target.value;
		setEmploymentHistory(values);
	};

	const handleEducationChange = (index, event) => {
		const values = [...educationHistory];
		values[index][event.target.name] = event.target.value;
		setEducationHistory(values);
	};

	const handleReferenceChange = (index, event) => {
		const values = [...references];
		values[index][event.target.name] = event.target.value;
		setReferences(values);
	};

	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<h2>Job Application</h2>
					<form>
						<h4 className="mt-3">
							Fields with red <Required /> are required.
						</h4>

						<section className="resume-coverletter-hear">
							<h3 className="mt-3">Resume</h3>
							<div className="form-group">
								<label>
									Resume <Required />
								</label>
								<input type="file" className="form-control" accept=".pdf,.doc,.docx,.txt" required />
							</div>
							<h3 className="mt-3">Cover Letter</h3>
							<div className="form-group">
								<label>Cover Letter</label>
								<input type="file" className="form-control" accept=".pdf,.doc,.docx,.txt" />
							</div>
							<h3 className="mt-3">How did you hear about us?</h3>
							<div className="form-group">
								<label>How did you hear about us?</label>
								<select className="form-control">
									<option value="">Select an option</option>
									<option value="LinkedIn">LinkedIn</option>
									<option value="Indeed">Indeed</option>
									<option value="Glassdoor">Glassdoor</option>
									<option value="Referral">Referral</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</section>

						<section className="contact-info">
							<h3 className="mt-3">Contact Information</h3>
							<div className="form-group">
								<label>
									First Name <Required />
								</label>
								<input type="text" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Last Name <Required />
								</label>
								<input type="text" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Email <Required />
								</label>
								<input type="email" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Phone Number <Required />
								</label>
								<input type="tel" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Address Line 1 <Required />
								</label>
								<input type="text" className="form-control" required />
							</div>
							<div className="form-group">
								<label>Address Line 2</label>
								<input type="text" className="form-control" />
							</div>
							<div className="form-group">
								<label>
									City <Required />
								</label>
								<input type="text" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Province/State <Required />
								</label>
								<select className="form-control" required>
									<option value="">Select a province/state</option>
									<option value="AB">Alberta</option>
									<option value="BC">British Columbia</option>
									<option value="MB">Manitoba</option>
									<option value="NB">New Brunswick</option>
									<option value="NL">Newfoundland and Labrador</option>
									<option value="NS">Nova Scotia</option>
									<option value="ON">Ontario</option>
									<option value="PE">Prince Edward Island</option>
									<option value="QC">Quebec</option>
									<option value="SK">Saskatchewan</option>
									<option value="NT">Northwest Territories</option>
									<option value="NU">Nunavut</option>
									<option value="YT">Yukon</option>
								</select>
							</div>
							<div className="form-group">
								<label>
									Postal/Zip Code <Required />
								</label>
								<input type="text" className="form-control" required />
							</div>
							<div className="form-group">
								<label>
									Country/Region <Required />
								</label>
								<select className="form-control" required>
									<option value="">Select a country/region</option>
									<option value="CA">Canada</option>
									<option value="US">United States</option>
								</select>
							</div>
						</section>

						<section className="work-eligibility">
							<h3 className="mt-3">Work Eligibility</h3>
							<div className="form-group">
								<label>
									Are you legally eligible to work in the US? <Required />
								</label>
								<div className="form-check">
									<input className="form-check-input" type="radio" id="yes" name="usWorkEligibility" value="yes" required />
									<label className="form-check-label" htmlFor="yes">
										Yes
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" id="no" name="usWorkEligibility" value="no" />
									<label className="form-check-label" htmlFor="no">
										No
									</label>
								</div>
							</div>
							<div className="form-group">
								<label>
									Are you willing to relocate? <Required />
								</label>
								<div className="form-check">
									<input className="form-check-input" type="radio" id="yes" name="relocate" value="yes" required />
									<label className="form-check-label" htmlFor="yes">
										Yes
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" id="no" name="relocate" value="no" />
									<label className="form-check-label" htmlFor="no">
										No
									</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" id="notSure" name="relocate" value="notSure" />
									<label className="form-check-label" htmlFor="notSure">
										Not Sure
									</label>
								</div>
								<div className="form-group">
									<label>
										Have you ever been convicted of a felony? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="felony" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="felony" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>If yes, please explain</label>
									<textarea className="form-control"></textarea>
								</div>
								<div className="form-group">
									<label>
										Are you willing to undergo a background check? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="backgroundCheck" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="backgroundCheck" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>
										Are you willing to undergo a drug test? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="drugTest" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="drugTest" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>
										Are you willing to work overtime? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="overtime" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="overtime" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>
										Are you willing to work weekends? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="weekends" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="weekends" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>
										Are you willing to travel? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="travel" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="travel" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
								<div className="form-group">
									<label>
										Are you willing to work remotely? <Required />
									</label>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="yes" name="remote" value="yes" required />
										<label className="form-check-label" htmlFor="yes">
											Yes
										</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" id="no" name="remote" value="no" />
										<label className="form-check-label" htmlFor="no">
											No
										</label>
									</div>
								</div>
							</div>
						</section>

						<div>
							<h3 className="mt-3">Employment History</h3>
							{employmentHistory.map((item, index) => (
								<div key={index} className="mt-3">
									<div className="form-group">
										<label>Company Name {index + 1}</label>
										<input
											type="text"
											name="companyName"
											className="form-control"
											value={item.companyName}
											onChange={(event) => handleEmploymentChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Job Title</label>
										<input
											type="text"
											name="jobTitle"
											className="form-control"
											value={item.jobTitle}
											onChange={(event) => handleEmploymentChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Start Date</label>
										<input
											type="date"
											name="startDate"
											className="form-control"
											value={item.startDate}
											onChange={(event) => handleEmploymentChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>End Date</label>
										<input
											type="date"
											name="endDate"
											className="form-control"
											value={item.endDate}
											onChange={(event) => handleEmploymentChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Job Description</label>
										<textarea
											name="jobDescription"
											className="form-control"
											value={item.jobDescription}
											onChange={(event) => handleEmploymentChange(index, event)}
											required
										></textarea>
									</div>
								</div>
							))}
							<button className="btn btn-primary mt-3" onClick={addEmploymentHistory}>
								Add Another Job
							</button>

							<h3 className="mt-4">Education</h3>
							{educationHistory.map((item, index) => (
								<div key={index} className="mt-3">
									<div className="form-group">
										<label>School Name {index + 1}</label>
										<input
											type="text"
											name="schoolName"
											className="form-control"
											value={item.schoolName}
											onChange={(event) => handleEducationChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Degree</label>
										<input
											type="text"
											name="degree"
											className="form-control"
											value={item.degree}
											onChange={(event) => handleEducationChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Major</label>
										<input
											type="text"
											name="major"
											className="form-control"
											value={item.major}
											onChange={(event) => handleEducationChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Graduation Date</label>
										<input
											type="date"
											name="graduationDate"
											className="form-control"
											value={item.graduationDate}
											onChange={(event) => handleEducationChange(index, event)}
											required
										/>
									</div>
									<div className="form-group">
										<label>GPA</label>
										<input
											type="number"
											name="gpa"
											className="form-control"
											value={item.gpa}
											onChange={(event) => handleEducationChange(index, event)}
										/>
									</div>
								</div>
							))}
							<button className="btn btn-primary mt-3" onClick={addEducationHistory}>
								Add Another Education
							</button>
						</div>
						<h3 className="mt-3">Skills</h3>
						<div className="form-group">
							<label>Skills</label>
							<textarea className="form-control"></textarea>
						</div>
						<div className="form-group">
							<label>Certifications</label>
							<textarea className="form-control"></textarea>
						</div>
						<h3 className="mt-3">References</h3>
						{references.map((item, index) => (
							<div key={index} className="mt-3">
								<div className="form-group">
									<label>Relationship {index + 1}</label>
									<input
										type="text"
										name="relationship"
										className="form-control"
										value={item.relationship}
										onChange={(event) => handleReferenceChange(index, event)}
									/>
									<label>Name</label>
									<input
										type="text"
										name="name"
										className="form-control"
										value={item.name}
										onChange={(event) => handleReferenceChange(index, event)}
									/>
									<label>Email</label>
									<input
										type="email"
										name="email"
										className="form-control"
										value={item.email}
										onChange={(event) => handleReferenceChange(index, event)}
									/>
									<label>Phone Number</label>
									<input
										type="tel"
										name="phoneNumber"
										className="form-control"
										value={item.phoneNumber}
										onChange={(event) => handleReferenceChange(index, event)}
									/>
									<label>Company</label>
									<input
										type="text"
										name="company"
										className="form-control"
										value={item.company}
										onChange={(event) => handleReferenceChange(index, event)}
									/>
								</div>
							</div>
						))}
						<button className="btn btn-primary mt-3" onClick={addReference}>
							Add Another Reference
						</button>
						<h3 className="mt-3">Information Truthfulness</h3>
						<div className="form-group">
							<label>
								<input type="checkbox" required /> I certify that all the information provided in this application is true and
								complete to the best of my knowledge. <Required />
							</label>
						</div>
						<h3 className="mt-3">Voluntary Equal Employment Opportunity Self-Identification</h3>
						<div className="form-group">
							<label>
								What is your Gender? <Required />
							</label>
							<select className="form-control" required>
								<option value="">Select an option</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="optOut">Opt Out</option>
							</select>
						</div>
						<div className="form-group mt-2">
							<label>
								What is your Race/Ethnic background? <Required />
							</label>
							<select className="form-control" required>
								<option value="">Select an option</option>
								<option value="white">White</option>
								<option value="hispanic">Hispanic or Latino</option>
								<option value="black">Black or African American</option>
								<option value="hawaiian">Native Hawaiian or Other Pacific Islander</option>
								<option value="asian">Asian</option>
								<option value="native">American Indian or Alaska Native</option>
								<option value="optOut">Opt Out</option>
							</select>
						</div>
						<h3 className="mt-3">Voluntary Self-Identification of Disability</h3>
						<div className="form-group">
							<label>
								Do you have a disability? <Required />
							</label>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="yes" name="disability" value="yes" required />
								<label className="form-check-label" htmlFor="yes">
									Yes, I have a disability (or previously had a disability)
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="no" name="disability" value="no" />
								<label className="form-check-label" htmlFor="no">
									No, I do not have a disability
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="optOut" name="disability" value="optOut" />
								<label className="form-check-label" htmlFor="optOut">
									I do not wish to answer
								</label>
							</div>
						</div>
						<h3 className="mt-3">Voluntary Self-Identification of Veteran Status</h3>
						<div className="form-group">
							<label>
								Are you a veteran? <Required />
							</label>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="yes" name="veteran" value="yes" required />
								<label className="form-check-label" htmlFor="yes">
									Yes, I am a veteran
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="no" name="veteran" value="no" />
								<label className="form-check-label" htmlFor="no">
									No, I am not a veteran
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" id="optOut" name="veteran" value="optOut" />
								<label className="form-check-label" htmlFor="optOut">
									I do not wish to answer
								</label>
							</div>
						</div>
						<h3 className="mt-3">Signature</h3>
						<div className="form-group">
							<label>
								Your Name <Required />
							</label>
							<input type="text" className="form-control" required />
						</div>
						<div className="form-group">
							<label>
								Today's Date <Required />
							</label>
							<input type="date" className="form-control" required />
						</div>
						<div className="form-group">
							<label>
								<input type="checkbox" required /> Checking the checkbox is equivalent to a handwritten signature. <Required />
							</label>
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default JobFields;
