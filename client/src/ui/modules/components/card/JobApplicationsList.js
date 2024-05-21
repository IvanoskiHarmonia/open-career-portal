import React, { useEffect, useState } from "react";
import { getJobApplications } from "../../hooks/getJobApplications";
import { Link } from "react-router-dom";

const JobApplicationsList = () => {
	const [jobApplications, setJobApplications] = useState([]);

	useEffect(() => {
		const fetchJobApplications = async () => {
			const data = await getJobApplications();
			setJobApplications(data);
		};
		fetchJobApplications();
	}, []);

	return (
		<div>
			<h1>Job Applications</h1>
			<ul>
				{jobApplications.map((application) => (
					<li key={application._id}>
						<Link to={`/applications/${application._id}`}>
							{application.personalFirstName} {application.personalLastName} - {application.personalEmail}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default JobApplicationsList;
