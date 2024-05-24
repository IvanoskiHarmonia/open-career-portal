import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../common/hooks/useAuth";
import { Tab, Tabs } from "react-bootstrap";

const UserJobApplications = () => {
	const { userId } = useAuth();
	const [jobApplications, setJobApplications] = useState([]);
	const [key, setKey] = useState("active");

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

	const activeApplications = jobApplications.filter((application) => application.status.toLowerCase() === "pending");
	const inactiveApplications = jobApplications.filter((application) => application.status.toLowerCase() === "rejected");

	return (
		<div className="col-lg-10 offset-lg-1">
			<h3>Your Job Applications</h3>
			<Tabs id="applications-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
				<Tab eventKey="active" title="Active Applications">
					<ul className="list-group">
						{activeApplications.map((application) => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={application._id}>
								<div>
									<strong>{application.jobTitle}</strong> at {application.personalEmail || "N/A"}
									<br />
									Applied on: {application.signatureDate.split("T")[0]}
								</div>
								<span className="badge text-bg-success rounded">{application.status}</span>
							</li>
						))}
					</ul>
				</Tab>
				<Tab eventKey="inactive" title="Inactive Applications">
					<ul className="list-group">
						{inactiveApplications.map((application) => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={application._id}>
								<div>
									<strong>{application.jobTitle}</strong> at {application.companyName || "N/A"}
									<br />
									Applied on: {application.signatureDate.split("T")[0]}
								</div>
								<span className="badge text-bg-danger rounded">{application.status}</span>
							</li>
						))}
					</ul>
				</Tab>
			</Tabs>
		</div>
	);
};

export default UserJobApplications;
