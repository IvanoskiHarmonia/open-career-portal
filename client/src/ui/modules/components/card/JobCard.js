import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import "./JobCard.css";

const JobCard = React.memo(({ job }) => {
	return (
		<div className="card mt-3 mb-3">
			<div className="card-body">
				<h5 className="card-title">{job.title}</h5>
				<p className="card-text">{job.company}</p>
				<div className="markdown-limited">
					<ReactMarkdown components={components}>{job.description}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
});

export default JobCard;
