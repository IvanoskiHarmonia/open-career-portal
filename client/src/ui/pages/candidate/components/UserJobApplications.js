import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../common/hooks/useAuth";

const UserJobApplications = () => {
	const { userId } = useAuth();
	const [jobApplications, setJobApplications] = useState([]);

	useEffect(() => {
		const fetchJobApplications = async () => {
			try {
				const response = await axios.get(`http://localhost:8000/api/user-applications/user/${userId}`);
				setJobApplications(response.data);
			} catch (error) {
				console.error("Failed to fetch job applications:", error);
			}
		};
		fetchJobApplications();
	}, [userId]);

	return (
		<div className="col-lg-10 offset-lg-1">
			<h3>Your Job Applications</h3>
			<ul className="list-group">
				{jobApplications.map((application) => (
					<li className="list-group-item d-flex justify-content-between align-items-center" key={application._id}>
						{application.personalFirstName} {application.personalLastName} - {application.personalEmail} -{" "}
						{application.signatureDate.split("T")[0]}
						<span className="badge text-bg-success rounded">In review</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserJobApplications;
