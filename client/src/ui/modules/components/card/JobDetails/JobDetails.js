import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "react-feather";
import JobApplicationDetails from "./JobApplicationDetails";
import JobApplicationDetailsPlaceholder from "./JobApplicationDetailsPlaceholder";
import { useAuth } from "../../../../../common/hooks/useAuth";

const JobDetails = ({ setJob, job, detailsScreen = false }) => {
	const [loading, setLoading] = useState(true);
	const { userId } = useAuth();
	const [disableApplyButton, setDisableApplyButton] = useState(false);
	const [applicationDetails, setApplicationDetails] = useState(null);
	const { jobId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (detailsScreen) {
			const fetchUserAppliedToJob = async () => {
				axios
					.get(`/api/user-applications/check-application/${userId}/${jobId}`)
					.then((response) => {
						setDisableApplyButton(true);
						setApplicationDetails(response.data);
					})
					.catch((error) => {
						console.error("Error fetching user application status:", error.response.data.message);
					});
			};

			fetchUserAppliedToJob();
		}

		const fetchDetails = async () => {
			axios
				.get(`/api/jobs/${jobId}`)
				.then((response) => {
					setJob(response.data.job);
				})
				.catch((error) => {
					console.error("Error fetching job description:", error);
				})
				.finally(() => {
					setLoading(false);
				});
		};

		fetchDetails();
	}, [jobId, setJob, detailsScreen, userId, disableApplyButton]);

	const handleApply = () => {
		navigate(`/careers/apply/${jobId}`);
	};

	if (loading) {
		return (
			<div className="col-lg-10 offset-lg-1">
				<JobApplicationDetailsPlaceholder />
			</div>
		);
	}

	return (
		<div className="col-lg-10 offset-lg-1">
			{disableApplyButton && (
				<div className="alert alert-info" role="alert">
					You have already applied for this job on: <strong>{new Date(applicationDetails.createdAt).toDateString()}</strong>
				</div>
			)}
			{job && <JobApplicationDetails job={job} />}
			{!loading && !disableApplyButton && detailsScreen && (
				<div className="d-grid">
					<button className="btn btn-primary" onClick={handleApply}>
						Apply <ArrowRight />
					</button>
				</div>
			)}
		</div>
	);
};

export default JobDetails;
