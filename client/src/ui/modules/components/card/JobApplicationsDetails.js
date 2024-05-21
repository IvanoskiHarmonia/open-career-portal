import React, { useEffect, useState } from "react";
import { getJobApplicationById } from "../../hooks/getJobApplications";
import { useParams } from "react-router-dom";

const JobApplicationDetails = () => {
	const { id } = useParams();
	const [jobApplication, setJobApplication] = useState(null);

	useEffect(() => {
		const fetchJobApplication = async () => {
			const data = await getJobApplicationById(id);
			setJobApplication(data);
		};
		fetchJobApplication();
	}, [id]);

	if (!jobApplication) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Job Application Details</h1>
			<p>Job ID: {jobApplication[0]._id}</p>
			<p>
				Name: {jobApplication[0].personalFirstName} {jobApplication[0].personalLastName}
			</p>
			<p>Email: {jobApplication[0].personalEmail}</p>
			{/* Display other details as needed */}
		</div>
	);
};

export default JobApplicationDetails;
