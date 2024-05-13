import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import { useParams } from "react-router-dom";

const JobDetails = () => {
	const { jobId } = useParams();
	const [jobTitle, setJobTitle] = useState("");
	const [jobDetails, setJobDetails] = useState("");

	console.log("jobId", jobId);

	useEffect(() => {
		axios
			.get(`/api/job/${jobId}`)
			.then((response) => {
				setJobTitle(response.data.title);
				setJobDetails(response.data.description);
			})
			.catch((error) => {
				console.error("Error fetching job description:", error);
			});
	}, [jobId]);

	return (
		<div className="col-md-8">
			<ReactMarkdown components={components} children={`# ${jobTitle}\n${jobDetails}`} />
		</div>
	);
};

export default JobDetails;
