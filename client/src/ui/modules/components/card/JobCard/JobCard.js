import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-feather";
import "./JobCard.css";

const JobCard = React.memo(({ job }) => {
	return (
		<div className="card my-3 shadow-sm">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-start">
					<div>
						<h5 className="card-title mb-0">{job.title}</h5>
						<h6 className="card-subtitle text-muted">{job.company}</h6>
					</div>
					<p className="card-text text-muted small">Date released: {new Date(job.date_created).toLocaleDateString()}</p>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<p className="card-text mb-2">
						<strong>Location:</strong> {job.location}
					</p>
					<p className="card-text">
						<strong>Type:</strong> {job.type}
					</p>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<p className="card-text">
						<strong>Salary:</strong> {job.salary}
					</p>
					<p className="card-text">
						<strong>Remote:</strong> {job.remote ? "Yes" : "No"}
					</p>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<Link to={`/careers/${job.id}`} className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">
						More Details <ExternalLink size={20} />
					</Link>
				</div>
				<hr />
				<div className="clamp-2">
					<p>{job.requirements && job.requirements[0]}</p>
				</div>
			</div>
		</div>
	);
});

export default JobCard;
