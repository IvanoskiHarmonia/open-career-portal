import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../../common/hooks/useAuth";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserJobApplicationsPlaceholder from "./UserJobApplicationsPlaceholder";
import SpinnerOverlay from "../../../modules/components/loading/SpinnerOverlay";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

const UserJobApplications = () => {
	const { userId } = useAuth();
	const [jobApplications, setJobApplications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [key, setKey] = useState("active");

	useEffect(() => {
		const fetchJobApplications = async () => {
			try {
				const response = await axios.get(`${apiUrl}/api/user-applications/user/${userId}`);
				setJobApplications(response.data);
			} catch (error) {
				console.error("Failed to fetch job applications:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchJobApplications();
	}, [userId]);

	const activeApplications = jobApplications.filter((application) => application.status.toLowerCase() === "pending");
	const inactiveApplications = jobApplications.filter((application) => application.status.toLowerCase() === "rejected");

	if (loading) {
		return (
			<>
				<UserJobApplicationsPlaceholder />
				<SpinnerOverlay />
			</>
		);
	}

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
