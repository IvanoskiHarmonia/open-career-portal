import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "react-feather";
import JobApplicationDetails from "./JobApplicationDetails";
import JobApplicationDetailsPlaceholder from "./JobApplicationDetailsPlaceholder";

const JobDetails = ({ setJob, job, isApplyButtonVisible = false }) => {
	const [loading, setLoading] = useState(true);
	const { jobId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
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
	}, [jobId, setJob]);

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
			{job && <JobApplicationDetails job={job} />}
			{isApplyButtonVisible && (
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
