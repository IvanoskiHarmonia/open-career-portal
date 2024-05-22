import React, { useEffect, useState } from "react";
import axios from "axios";

const UserJobApplications = () => {
	const userId = localStorage.getItem("userId");
	const [jobApplications, setJobApplications] = useState([]);

	useEffect(() => {
		const fetchJobApplications = async () => {
			try {
				const response = await axios.get(`http://localhost:8000/api/user-applications/${userId}`);
				console.log("Job applications:", response.data, userId);
				setJobApplications(response.data);
			} catch (error) {
				console.error("Failed to fetch job applications:", error);
			}
		};
		fetchJobApplications();
	}, [userId]);

	return (
		<div>
			<h1>Your Job Applications</h1>
			<ul>
				{jobApplications.map((application) => (
					<li key={application._id}>
						{application.personalFirstName} {application.personalLastName} - {application.personalEmail}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserJobApplications;
