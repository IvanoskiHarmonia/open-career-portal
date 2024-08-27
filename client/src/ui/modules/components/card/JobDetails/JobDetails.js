import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "react-feather";
import JobApplicationDetails from "./JobApplicationDetails";
import JobApplicationDetailsPlaceholder from "./JobApplicationDetailsPlaceholder";
import { useAuth } from "../../../../../common/hooks/useAuth";
import SpinnerOverlay from "../../loading/SpinnerOverlay";
import { checkIfUserAppliedToJob } from "../../../../../common/api/jobsApplications";
import { getJobById } from "../../../../../common/api/jobs";

const JobDetails = ({ setJob, job, detailsScreen = false }) => {
	const [loading, setLoading] = useState(true);
	const { userId } = useAuth();
	const [disableApplyButton, setDisableApplyButton] = useState(false);
	const [applicationDetails, setApplicationDetails] = useState(null);
	const { jobId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			if (detailsScreen) {
				const response = await checkIfUserAppliedToJob(userId, jobId);
				if (response) {
					setDisableApplyButton(true);
					setApplicationDetails(response);
				}
			}

			try {
				const response = await getJobById(jobId);
				setJob(response);
			} catch (error) {
				console.error("Error fetching job description:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [jobId, setJob, detailsScreen, userId]);

	const handleApply = () => {
		navigate(`/careers/apply/${jobId}`);
	};

	if (loading) {
		return (
			<>
				<div className="col-lg-10 offset-lg-1">
					<JobApplicationDetailsPlaceholder />
				</div>
				<SpinnerOverlay />
			</>
		);
	}

	return (
		<div className="col-lg-10 offset-lg-1">
			{disableApplyButton && applicationDetails && (
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
