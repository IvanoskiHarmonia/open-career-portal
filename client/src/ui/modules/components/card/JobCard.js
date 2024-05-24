import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import { Link } from "react-router-dom";
import "./JobCard.css";
import { ExternalLink } from "react-feather";

const JobCard = React.memo(({ job }) => {
	return (
		<div className="card my-3 shadow-sm">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-start mb-3">
					<h5 className="card-title mb-0">{job.title}</h5>
					<p className="card-text text-muted small">Date released: {job.date_created}</p>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<Link to={`/careers/${job.id}`} className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">
						More Details <ExternalLink size={20} />
					</Link>
				</div>
				<hr />
				<div className="markdown-limited">
					<ReactMarkdown components={components}>{job.description}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
});

export default JobCard;
