import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import JobFields from "./JobFields";
import "@testing-library/jest-dom/extend-expect";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ message: "Success" }),
	})
);

test("submits the form with entered data", () => {
	render(<JobFields />);

	// Enter data in the Resume field
	const resumeInput = screen.getByLabelText(/resume \*/i);
	fireEvent.change(resumeInput, { target: { files: [new File(["resume.pdf"], "resume.pdf", { type: "application/pdf" })] } });

	// Enter data in the Cover Letter field
	const coverLetterInput = screen.getByLabelText(/cover letter/i);
	fireEvent.change(coverLetterInput, { target: { files: [new File(["cover-letter.pdf"], "cover-letter.pdf", { type: "application/pdf" })] } });

	// Select an option in the How did you hear about us? dropdown
	const hearAboutDropdown = screen.getByLabelText("How did you hear about us?");
	fireEvent.change(hearAboutDropdown, { target: { value: "LinkedIn" } });

	// Enter data in the First Name field
	const firstNameInput = screen.getByLabelText("First Name");
	fireEvent.change(firstNameInput, { target: { value: "John" } });

	// Enter data in the Last Name field
	const lastNameInput = screen.getByLabelText("Last Name");
	fireEvent.change(lastNameInput, { target: { value: "Doe" } });

	// Enter data in the Email field
	const emailInput = screen.getByLabelText("Email");
	fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

	// Enter data in the Phone Number field
	const phoneInput = screen.getByLabelText("Phone Number");
	fireEvent.change(phoneInput, { target: { value: "+1234567890" } });

	// Enter data in the Address Line 1 field
	const address1Input = screen.getByLabelText("Address Line 1");
	fireEvent.change(address1Input, { target: { value: "123 Main St" } });

	// Enter data in the Address Line 2 field
	const address2Input = screen.getByLabelText("Address Line 2");
	fireEvent.change(address2Input, { target: { value: "Apt 4B" } });

	// Enter data in the City field
	const cityInput = screen.getByLabelText("City");
	fireEvent.change(cityInput, { target: { value: "New York" } });

	// Select an option in the Province/State dropdown
	const provinceDropdown = screen.getByLabelText("Province/State");
	fireEvent.change(provinceDropdown, { target: { value: "New York" } });

	// Enter data in the Postal/Zip Code field
	const postalCodeInput = screen.getByLabelText("Postal/Zip Code");
	fireEvent.change(postalCodeInput, { target: { value: "10001" } });

	// Select an option in the Country/Region dropdown
	const countryDropdown = screen.getByLabelText("Country/Region");
	fireEvent.change(countryDropdown, { target: { value: "United States" } });

	// Select an option in the Are you legally eligible to work in the US? radio buttons
	const eligibilityRadio = screen.getByLabelText("Yes");
	fireEvent.click(eligibilityRadio);

	// Select an option in the Are you willing to relocate? radio buttons
	const relocateRadio = screen.getByLabelText("Yes");
	fireEvent.click(relocateRadio);

	// Select an option in the Have you ever been convicted of a felony? radio buttons
	const felonyRadio = screen.getByLabelText("No");
	fireEvent.click(felonyRadio);

	// Enter data in the If yes, please explain field
	const felonyExplanationInput = screen.getByLabelText("If yes, please explain");
	fireEvent.change(felonyExplanationInput, { target: { value: "N/A" } });

	// Select an option in the Are you willing to undergo a background check? radio buttons
	const backgroundCheckRadio = screen.getByLabelText("Yes");
	fireEvent.click(backgroundCheckRadio);

	// Select an option in the Are you willing to undergo a drug test? radio buttons
	const drugTestRadio = screen.getByLabelText("Yes");
	fireEvent.click(drugTestRadio);

	// Select an option in the Are you willing to work overtime? radio buttons
	const overtimeRadio = screen.getByLabelText("Yes");
	fireEvent.click(overtimeRadio);

	// Select an option in the Are you willing to work weekends? radio buttons
	const weekendsRadio = screen.getByLabelText("Yes");
	fireEvent.click(weekendsRadio);

	// Select an option in the Are you willing to travel? radio buttons
	const travelRadio = screen.getByLabelText("Yes");
	fireEvent.click(travelRadio);

	// Select an option in the Are you willing to work remotely? radio buttons
	const remoteWorkRadio = screen.getByLabelText("Yes");
	fireEvent.click(remoteWorkRadio);

	// Enter data in the Company Name field
	const companyNameInput = screen.getByLabelText("Company Name 1");
	fireEvent.change(companyNameInput, { target: { value: "ABC Corp" } });

	// Enter data in the Job Title field
	const jobTitleInput = screen.getByLabelText("Job Title");
	fireEvent.change(jobTitleInput, { target: { value: "Software Engineer" } });

	// Enter data in the Start Date field
	const startDateInput = screen.getByLabelText("Start Date");
	fireEvent.change(startDateInput, { target: { value: "2020-01-01" } });

	// Enter data in the End Date field
	const endDateInput = screen.getByLabelText("End Date");
	fireEvent.change(endDateInput, { target: { value: "2022-01-01" } });

	// Enter data in the Job Description field
	const jobDescriptionInput = screen.getByLabelText("Job Description");
	fireEvent.change(jobDescriptionInput, { target: { value: "Lorem ipsum dolor sit amet" } });

	// Enter data in the School Name field
	const schoolNameInput = screen.getByLabelText("School Name 1");
	fireEvent.change(schoolNameInput, { target: { value: "University of Example" } });

	// Enter data in the Degree field
	const degreeInput = screen.getByLabelText("Degree");
	fireEvent.change(degreeInput, { target: { value: "Bachelor of Science" } });

	// Enter data in the Major field
	const majorInput = screen.getByLabelText("Major");
	fireEvent.change(majorInput, { target: { value: "Computer Science" } });

	// Enter date in the Start Date field
	const startDateEducationInput = screen.getByLabelText("Enrollment Date");
	fireEvent.change(startDateEducationInput, { target: { value: "2014-09-01" } });

	// Enter data in the Graduation Date field
	const graduationDateInput = screen.getByLabelText("Graduation Date");
	fireEvent.change(graduationDateInput, { target: { value: "2018-05-01" } });

	// Enter data in the GPA field
	const gpaInput = screen.getByLabelText("GPA");
	fireEvent.change(gpaInput, { target: { value: "3.8" } });

	// Enter data in the Skills field
	const skillsInput = screen.getByLabelText("Skills");
	fireEvent.change(skillsInput, { target: { value: "JavaScript, React, HTML, CSS" } });

	// Enter data in the Certifications field
	const certificationsInput = screen.getByLabelText("Certifications");
	fireEvent.change(certificationsInput, { target: { value: "Certification 1, Certification 2" } });

	// Enter data in the Relationship field
	const relationshipInput = screen.getByLabelText("Relationship 1");
	fireEvent.change(relationshipInput, { target: { value: "Manager" } });

	// Enter data in the Name field
	const nameInput = screen.getByLabelText("Reference 1 Name");
	fireEvent.change(nameInput, { target: { value: "Jane Smith" } });

	// Enter data in the Email field
	const referenceEmailInput = screen.getByLabelText("Reference 1 Email");
	fireEvent.change(referenceEmailInput, { target: { value: "jane.smith@example.com" } });

	// Enter data in the Phone Number field
	const referencePhoneInput = screen.getByLabelText("Reference 1 Phone Number");
	fireEvent.change(referencePhoneInput, { target: { value: "+1234567890" } });

	// Enter data in the Company field
	const companyInput = screen.getByLabelText("Reference 1 Company");
	fireEvent.change(companyInput, { target: { value: "XYZ Corp" } });

	// Get the checkbox by role and verify its label text.
	const informationTruthfulnessCheckbox = screen.getByRole("checkbox", {
		name: "I certify that all the information provided is true",
	});

	// Click the checkbox to toggle its checked state
	fireEvent.click(informationTruthfulnessCheckbox);

	// Optionally, you can assert that the checkbox is now checked
	expect(informationTruthfulnessCheckbox).toBeChecked();

	// Select an option in the What is your Gender dropdown
	const genderDropdown = screen.getByLabelText("What is your Gender?");
	fireEvent.change(genderDropdown, { target: { value: "Male" } });

	// Select an option in the What is your Race/Ethnic background? dropdown
	const raceDropdown = screen.getByLabelText("What is your Race/Ethnic background?");
	fireEvent.change(raceDropdown, { target: { value: "White" } });

	// Select an option in the Do you have a disability? radio buttons
	const disabilityRadio = screen.getByLabelText("No");
	fireEvent.click(disabilityRadio);

	// Select an option in the Are you a veteran? radio buttons
	const veteranRadio = screen.getByLabelText("Yes");
	fireEvent.click(veteranRadio);

	// Enter data in the Your Name field
	const yourNameInput = screen.getByLabelText("Your Name");
	fireEvent.change(yourNameInput, { target: { value: "John Doe" } });

	// Enter data in the Today's Date field
	const todaysDateInput = screen.getByLabelText("Today's Date");
	fireEvent.change(todaysDateInput, { target: { value: "2022-10-01" } });

	// Check the Checking the checkbox is equivalent to a handwritten signature checkbox
	const signatureCheckbox = screen.getByRole("checkbox", {
		name: "Checking the checkbox is equivalent to a handwritten signature.",
	});

	// Click the checkbox to toggle its checked state
	fireEvent.click(signatureCheckbox);

	// Optionally, you can assert that the checkbox is now checked
	expect(signatureCheckbox).toBeChecked();

	// Submit the form
	const submitButton = screen.getByText("Submit Application");
	fireEvent.click(submitButton);

	// Assert that the form data is sent to the server
	// You can add your own assertions here based on your server-side implementation
	expect(fetch).toHaveBeenCalledWith("/api/job-application", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			usWorkEligibility: "yes",
			companyName: "ABC Corp",
			jobTitle: "Software Engineer",
			startDate: "2020-01-01",
			endDate: "2022-01-01",
			jobDescription: "Lorem ipsum dolor sit amet",
			schoolName: "University of Example",
			degree: "Bachelor of Science",
			major: "Computer Science",
			enrollmentDate: "2014-09-01",
			graduationDate: "2018-05-01",
			gpa: "3.8",
			relationship: "Manager",
			name: "Jane Smith",
			email: "jane.smith@example.com",
			phoneNumber: "+1234567890",
			company: "XYZ Corp",
		}),
	});
});
