import React from "react";
import ReactMarkdown from "react-markdown";
import components from "../utils/MarkdownCode";
import { Link } from "react-router-dom";
import "./JobCard.css";

const JobCard = React.memo(({ job }) => {
	return (
		<div className="card my-3">
			<div className="card-body">
				<div className="container">
					<div className="row">
						<h5 className="card-title col-md-4">{job.title}</h5>
						<p className="card-text col-md-4">Date released: {job.date_created}</p>
						<Link to={`/careers/${job.id}`} className="col-md-4">
							More Details &rarr;
						</Link>
					</div>
				</div>
				<div className="container">
					<div className="markdown-limited">
						<ReactMarkdown components={components}>{job.description}</ReactMarkdown>
					</div>
				</div>
			</div>
		</div>
	);
});

export default JobCard;
