import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";

const JobCard = ({ job }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{job.title}</h5>
				<p className="card-text">{job.company}</p>
				<ReactMarkdown components={components}>{job.description}</ReactMarkdown>
			</div>
		</div>
	);
};

export default JobCard;
