import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import { useNavigate, useParams } from "react-router-dom";

const JobDetails = ({ isApplyButtonVisible = false }) => {
	const { jobId } = useParams();
	const navigate = useNavigate();

	const [job, setJob] = useState({});

	useEffect(() => {
		axios
			.get(`/api/job/${jobId}`)
			.then((response) => {
				setJob(response.data);
			})
			.catch((error) => {
				console.error("Error fetching job description:", error);
			});
	}, [jobId]);

	const handleApply = () => {
		navigate(`/careers/apply/${jobId}`);
	};

	return (
		<div className="col-md-8 offset-md-2">
			<ReactMarkdown components={components}>{`# ${job.title}\n${job.description}`}</ReactMarkdown>
			{isApplyButtonVisible && (
				<button className="btn btn-primary" onClick={handleApply}>
					Apply
				</button>
			)}
		</div>
	);
};

export default JobDetails;
