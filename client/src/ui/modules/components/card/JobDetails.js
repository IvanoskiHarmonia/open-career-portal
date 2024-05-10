import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";

const JobDetails = ({ jobId }) => {
	const [jobTitle, setJobTitle] = useState("");
	const [jobDetails, setJobDetails] = useState("");

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
		<div className="container">
			<div className="row">
				<div className="col-md-8 offset-md-2">
					<ReactMarkdown components={components} children={`# ${jobTitle}\n${jobDetails}`} />
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
