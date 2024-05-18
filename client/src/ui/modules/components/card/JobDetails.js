import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight } from "react-feather";

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
		<div className="col-lg-10 offset-lg-1">
			<ReactMarkdown components={components}>{`# ${job.title}\n${job.description}`}</ReactMarkdown>
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