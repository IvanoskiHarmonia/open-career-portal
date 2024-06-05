import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import JobFields from "./JobFields";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

global.fetch = jest.fn(() =>
	Promise.resolve({
		status: 201,
		json: () => Promise.resolve({}),
	})
);

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: () => mockUseNavigate,
}));

jest.mock("../../../../common/hooks/useAuth", () => ({
	useAuth: jest.fn(() => ({ userId: "test-user-id", isAuthenticated: true, loading: false })),
}));

const mockAxios = new MockAdapter(axios);

mockAxios.onGet("http://localhost:8000/api/user-applications/user-details/test-user-id").reply(200, {
	personalFirstName: "John",
	personalLastName: "Doe",
	personalEmail: "john.doe@example.com",
	personalPhoneNumber: "+1234567890",
	personalAddress1: "123 Main St",
	personalAddress2: "Apt 4B",
	personalCity: "New York",
	personalZipCode: "10001",
	jobExperience: [],
	educationHistory: [],
	references: [],
});

mockAxios.onPost("http://localhost:8000/api/user-applications/create-application").reply(201, {});

test("submits the form with entered data", async () => {
	const job = {
		id: 1,
		title: "Software Engineer",
		company: "Tech Innovators Inc.",
		description: "We are looking for a skilled software engineer to join our team...",
		date_created: "2024-05-28T08:30:00Z",
		date_updated: "2024-05-28T08:30:00Z",
		location: "Austin, TX, USA",
		type: "Full-time",
		salary: "85,000 - 100,000 USD",
		requirements: [
			"Bachelor's degree in Computer Science or related field",
			"2+ years of experience in software development",
			"Proficiency in Java, Spring Boot, React",
		],
		responsibilities: ["Develop and maintain web applications", "Collaborate with cross-functional teams", "Participate in code reviews"],
		benefits: ["Health insurance", "401(k) plan", "Flexible working hours"],
		application_deadline: "2024-06-30T23:59:59Z",
		contact_information: {
			email: "hr@techinnovators.com",
			phone: "123-456-7890",
		},
		job_category: "IT",
		experience_level: "Mid-level",
		education: "Bachelor's degree",
		company_logo: "https://example.com/logos/tech_innovators_logo.png",
		remote: true,
		how_to_apply: "Send your resume and cover letter to hr@techinnovators.com",
	};

	render(<JobFields job={job} />);

	const resumeInput = screen.getByLabelText(/resume \*/i);
	fireEvent.change(resumeInput, { target: { files: [new File(["resume.pdf"], "resume.pdf", { type: "application/pdf" })] } });

	const coverLetterInput = screen.getByLabelText(/cover letter/i);
	fireEvent.change(coverLetterInput, { target: { files: [new File(["cover-letter.pdf"], "cover-letter.pdf", { type: "application/pdf" })] } });

	const hearAboutDropdown = screen.getByLabelText("How did you hear about us?");
	fireEvent.change(hearAboutDropdown, { target: { value: "LinkedIn" } });

	const firstNameInput = screen.getByLabelText("First Name");
	fireEvent.change(firstNameInput, { target: { value: "John" } });

	const lastNameInput = screen.getByLabelText("Last Name");
	fireEvent.change(lastNameInput, { target: { value: "Doe" } });

	const emailInput = screen.getByLabelText("Email");
	fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

	const phoneInput = screen.getByLabelText("Phone Number");
	fireEvent.change(phoneInput, { target: { value: "+1234567890" } });

	const address1Input = screen.getByLabelText("Address Line 1");
	fireEvent.change(address1Input, { target: { value: "123 Main St" } });

	const address2Input = screen.getByLabelText("Address Line 2");
	fireEvent.change(address2Input, { target: { value: "Apt 4B" } });

	const cityInput = screen.getByLabelText("City");
	fireEvent.change(cityInput, { target: { value: "New York" } });

	const provinceDropdown = screen.getByLabelText("Province/State");
	fireEvent.change(provinceDropdown, { target: { value: "New York" } });

	const postalCodeInput = screen.getByLabelText("Postal/Zip Code");
	fireEvent.change(postalCodeInput, { target: { value: "10001" } });

	const countryDropdown = screen.getByLabelText("Country/Region");
	fireEvent.change(countryDropdown, { target: { value: "United States" } });

	const usWorkEligibilityYesRadio = screen.getByLabelText("Yes", { selector: "#yes-usWorkEligibility" });
	fireEvent.click(usWorkEligibilityYesRadio);

	const relocateRadio = screen.getByLabelText("Yes", { selector: "#yes-relocate" });
	fireEvent.click(relocateRadio);

	const felonyRadio = screen.getByLabelText("No", { selector: "#no-felony" });
	fireEvent.click(felonyRadio);

	const felonyExplanationInput = screen.getByLabelText("If yes, please explain");
	fireEvent.change(felonyExplanationInput, { target: { value: "N/A" } });

	const backgroundCheckRadio = screen.getByLabelText("Yes", { selector: "#yes-backgroundCheck" });
	fireEvent.click(backgroundCheckRadio);

	const drugTestRadio = screen.getByLabelText("Yes", { selector: "#yes-drugTest" });
	fireEvent.click(drugTestRadio);

	const overtimeRadio = screen.getByLabelText("Yes", { selector: "#yes-overtime" });
	fireEvent.click(overtimeRadio);

	const weekendsRadio = screen.getByLabelText("Yes", { selector: "#yes-weekends" });
	fireEvent.click(weekendsRadio);

	const travelRadio = screen.getByLabelText("Yes", { selector: "#yes-travel" });
	fireEvent.click(travelRadio);

	const remoteWorkRadio = screen.getByLabelText("Yes", { selector: "#yes-remote" });
	fireEvent.click(remoteWorkRadio);

	const addAnotherJobButton = screen.getByText("Add Another Job");
	fireEvent.click(addAnotherJobButton);

	const companyNameInput = screen.getByLabelText("Company Name 1");
	fireEvent.change(companyNameInput, { target: { value: "ABC Corp" } });

	const jobTitleInput = screen.getByLabelText("Job Title");
	fireEvent.change(jobTitleInput, { target: { value: "Software Engineer" } });

	const startDateInput = screen.getByLabelText("Start Date");
	fireEvent.change(startDateInput, { target: { value: "2020-01-01" } });

	const endDateInput = screen.getByLabelText("End Date");
	fireEvent.change(endDateInput, { target: { value: "2022-01-01" } });

	const jobDescriptionInput = screen.getByLabelText("Job Description");
	fireEvent.change(jobDescriptionInput, { target: { value: "Lorem ipsum dolor sit amet" } });

	const addAnotherEducationButton = screen.getByText("Add Another Education");
	fireEvent.click(addAnotherEducationButton);

	const schoolNameInput = screen.getByLabelText("School Name 1");
	fireEvent.change(schoolNameInput, { target: { value: "University of Example" } });

	const degreeInput = screen.getByLabelText("Degree");
	fireEvent.change(degreeInput, { target: { value: "Bachelor of Science" } });

	const majorInput = screen.getByLabelText("Major");
	fireEvent.change(majorInput, { target: { value: "Computer Science" } });

	const startDateEducationInput = screen.getByLabelText("Enrollment Date");
	fireEvent.change(startDateEducationInput, { target: { value: "2014-09-01" } });

	const confirmGraduationRadio = screen.getByLabelText("yes-graduate-1");
	fireEvent.click(confirmGraduationRadio);

	const graduationDateInput = screen.getByLabelText("Graduation Date");
	fireEvent.change(graduationDateInput, { target: { value: "2018-05-01" } });

	const gpaInput = screen.getByLabelText("GPA");
	fireEvent.change(gpaInput, { target: { value: "3.8" } });

	const skillsInput = screen.getByLabelText("Skills");
	fireEvent.change(skillsInput, { target: { value: "JavaScript, React, HTML, CSS" } });

	const certificationsInput = screen.getByLabelText("Certifications");
	fireEvent.change(certificationsInput, { target: { value: "Certification 1, Certification 2" } });

	const addAnotherReferenceButton = screen.getByText("Add Another Reference");
	fireEvent.click(addAnotherReferenceButton);

	const relationshipInput = screen.getByLabelText("Reference 1 Relationship");
	fireEvent.change(relationshipInput, { target: { value: "Manager" } });

	const nameInput = screen.getByLabelText("Reference 1 Name");
	fireEvent.change(nameInput, { target: { value: "Jane Smith" } });

	const referenceEmailInput = screen.getByLabelText("Reference 1 Email");
	fireEvent.change(referenceEmailInput, { target: { value: "jane.smith@example.com" } });

	const referencePhoneInput = screen.getByLabelText("Reference 1 Phone Number");
	fireEvent.change(referencePhoneInput, { target: { value: "+1234567890" } });

	const companyInput = screen.getByLabelText("Reference 1 Company");
	fireEvent.change(companyInput, { target: { value: "XYZ Corp" } });

	const informationTruthfulnessCheckbox = screen.getByRole("checkbox", {
		name: "I certify that all the information provided is true",
	});

	fireEvent.click(informationTruthfulnessCheckbox);

	expect(informationTruthfulnessCheckbox).toBeChecked();

	const genderDropdown = screen.getByLabelText("What is your Gender?");
	fireEvent.change(genderDropdown, { target: { value: "Male" } });

	const raceDropdown = screen.getByLabelText("What is your Race/Ethnic background?");
	fireEvent.change(raceDropdown, { target: { value: "White" } });

	const disabilityRadio = screen.getByLabelText("No, I do not have a disability", { selector: "#no-disability" });
	fireEvent.click(disabilityRadio);

	const veteranRadio = screen.getByLabelText("No, I am not a veteran", { selector: "#no-veteran" });
	fireEvent.click(veteranRadio);

	const yourNameInput = screen.getByLabelText("Your Name");
	fireEvent.change(yourNameInput, { target: { value: "John Doe" } });

	const todaysDateInput = screen.getByLabelText("Today's Date");
	fireEvent.change(todaysDateInput, { target: { value: "2022-10-01" } });

	const signatureCheckbox = screen.getByRole("checkbox", {
		name: "Checking the checkbox is equivalent to a handwritten signature.",
	});

	fireEvent.click(signatureCheckbox);
	expect(signatureCheckbox).toBeChecked();

	const submitButton = screen.getByText("Submit Application");
	const form = submitButton.closest("form");
	fireEvent.submit(form);

	await waitFor(() => {
		expect(mockAxios.history.post.length).toBe(1);
	});

	const postedData = JSON.parse(mockAxios.history.post[0].data);
	expect(mockAxios.history.post[0].url).toBe("http://localhost:8000/api/user-applications/create-application");
	expect(postedData).toMatchObject({
		userId: "test-user-id",
		resume: expect.any(Object),
		coverLetter: expect.any(Object),
		personalFirstName: "John",
		personalMiddleInitial: "",
		personalLastName: "Doe",
		personalEmail: "john.doe@example.com",
		personalPhoneNumber: "+1234567890",
		personalAddress1: "123 Main St",
		personalAddress2: "Apt 4B",
		personalCity: "New York",
		personalState: "New York",
		personalZipCode: "10001",
		personalCountry: "United States",
		usWorkEligibility: "yes",
		relocate: "yes",
		felony: "no",
		backgroundCheck: "yes",
		drugTest: "yes",
		overtime: "yes",
		weekends: "yes",
		travel: "yes",
		remote: "yes",
		companyName: "ABC Corp",
		jobTitle: "Software Engineer",
		jobStartDate: "2020-01-01",
		jobEndDate: "2022-01-01",
		jobDescription: "Lorem ipsum dolor sit amet",
		schoolName: "University of Example",
		degree: "Bachelor of Science",
		major: "Computer Science",
		enrollmentDate: "2014-09-01",
		"graduated-1": "yes",
		graduationDate: "2018-05-01",
		gpa: "3.8",
		listOfSkills: "JavaScript, React, HTML, CSS",
		listOfCertifications: "Certification 1, Certification 2",
		referenceRelationship: "Manager",
		referenceName: "Jane Smith",
		referenceEmail: "jane.smith@example.com",
		referencePhoneNumber: "+1234567890",
		referenceCompany: "XYZ Corp",
		veteran: "no",
		disability: "no",
		signatureName: "John Doe",
		employeeId: "",
		signatureDate: "2022-10-01",
		confirmSignature: "on",
		jobId: 1,
		jobExperience: [
			{
				id: 1,
				companyName: "ABC Corp",
				jobTitle: "Software Engineer",
				jobStartDate: "2020-01-01",
				jobEndDate: "2022-01-01",
				jobDescription: "Lorem ipsum dolor sit amet",
			},
		],
		educationHistory: [
			{
				id: 1,
				schoolName: "University of Example",
				degree: "Bachelor of Science",
				major: "Computer Science",
				enrollmentDate: "2014-09-01",
				graduationDate: "2018-05-01",
				graduated: "yes",
				gpa: "3.8",
			},
		],
		references: [
			{
				id: 1,
				referenceRelationship: "Manager",
				referenceName: "Jane Smith",
				referenceEmail: "jane.smith@example.com",
				referencePhoneNumber: "+1234567890",
				referenceCompany: "XYZ Corp",
			},
		],
		createdAt: expect.any(String), // This allows for dynamic timestamp
	});
});
