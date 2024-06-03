import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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
} from "./utils";

import Required from "../small_blocks/Required";
import "./JobFields.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../common/hooks/useAuth";
import { Send } from "react-feather";
import ScrollSpyNav from "../small_blocks/ScrollSpyNav";

const JobFields = ({ job }) => {
	const navigate = useNavigate();
	const { userId } = useAuth();
	const [initialData, setInitialData] = useState([]);

	const employementHistoryRef = useRef(null);
	const educationHistoryRef = useRef(null);
	const referencesRef = useRef(null);

	useEffect(() => {
		const fetchUserDetails = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/user-applications/user-details/" + userId);
				if (response.status === 200) {
					setInitialData(response.data);
				} else {
					console.error("Failed to fetch user details:", response.data);
				}
			} catch (error) {
				console.error("Failed to fetch user details:", error.response ? error.response.data : error.message);
			}
		};

		fetchUserDetails();
	}, [userId]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		data.jobTitle = job.title;
		data.jobId = job.id;

		data.jobExperience = employementHistoryRef.current.getEmploymentHistory();
		data.educationHistory = educationHistoryRef.current.getEducationHistory();
		data.references = referencesRef.current.getReferences();

		const createdAt = new Date().toISOString();

		try {
			const response = await axios.post("http://localhost:8000/api/user-applications/create-application", {
				userId,
				...data,
				createdAt,
			});
			if (response.status === 201) {
				navigate("/user-applications/" + userId);
			} else {
				console.error("Failed to save job application:", response.data);
			}
		} catch (error) {
			console.error("Failed to save job application:", error.response ? error.response.data : error.message);
		}
	};

	return (
		<>
			<div className="col-lg-3 d-none d-lg-block">
				<ScrollSpyNav />
			</div>

			<div
				data-bs-spy="scroll"
				data-bs-target="#scroll-spy-job-application"
				data-bs-smooth-scroll="true"
				tabIndex="0"
				className="col-lg-9 col-md-12"
			>
				<h3 className="text-center">Job Application</h3>
				<form onSubmit={handleSubmit}>
					<h5 className="bg-warning bg-opacity-25 text-center rounded border-1 p-2 my-3">
						Fields with red <Required /> are required.
					</h5>

					<Resume />

					<Opportunity />

					<ContactInfo initialData={initialData} />

					<WorkEligibility initialData={initialData} />

					<EmploymentHistory ref={employementHistoryRef} initialData={initialData.jobExperience} />

					<EducationHistory ref={educationHistoryRef} initialData={initialData.educationHistory} />

					<JobSkills initialData={initialData} />

					<References ref={referencesRef} initialData={initialData.references} />

					<InformationTruthfulness />

					<SelfIdentification initialData={initialData} />

					<Signature />

					<button type="submit" className="btn btn-primary mt-4">
						Submit Application <Send className="ms-1" />
					</button>
				</form>
			</div>
		</>
	);
};

export default JobFields;
