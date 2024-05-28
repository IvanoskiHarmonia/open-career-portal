import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "react-feather";
import JobApplicationDetails from "./JobDetails/JobApplicationDetails";

const JobDetails = ({ setJob, job, isApplyButtonVisible = false }) => {
	const { jobId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`/api/jobs/${jobId}`)
			.then((response) => {
				console.log("Job:", response.data.job);
				setJob(response.data.job);
			})
			.catch((error) => {
				console.error("Error fetching job description:", error);
			});
	}, [jobId, setJob]);

	const handleApply = () => {
		navigate(`/careers/apply/${jobId}`);
	};

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
