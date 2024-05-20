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
					<div className="row row-col-3">
						<h5 className="card-title col-md-4">{job.title}</h5>
						<p className="card-text col-md-4 mb-sm-1">Date released: {job.date_created}</p>
						<Link
							to={`/careers/${job.id}`}
							className="col-md-4 link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
						>
							More Details &rarr;
						</Link>
						<div className="markdown-limited col mt-sm-2">
							<ReactMarkdown components={components}>{job.description}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default JobCard;
