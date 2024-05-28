import React from "react";
import PropTypes from "prop-types";

const JobApplicationDetails = ({ job }) => {
	return (
		<div className="card mb-3">
			<div className="card-header">
				<h2>{job.title}</h2>
				<h5 className="text-muted">{job.company}</h5>
			</div>
			<div className="card-body">
				<p>
					<strong>Description:</strong>
				</p>
				<p>{job.description}</p>
				<p>
					<strong>Location:</strong> {job.location}
				</p>
				<p>
					<strong>Type:</strong> {job.type}
				</p>
				<p>
					<strong>Salary:</strong> {job.salary}
				</p>
				<p>
					<strong>Date Created:</strong> {new Date(job.date_created).toLocaleDateString()}
				</p>
				<p>
					<strong>Date Updated:</strong> {new Date(job.date_updated).toLocaleDateString()}
				</p>

				<p>
					<strong>Requirements:</strong>
				</p>
				<ul>{job.requirements && job.requirements.map((req, index) => <li key={index}>{req}</li>)}</ul>

				<p>
					<strong>Responsibilities:</strong>
				</p>
				<ul>{job.responsibilities && job.responsibilities.map((res, index) => <li key={index}>{res}</li>)}</ul>

				<p>
					<strong>Benefits:</strong>
				</p>
				<ul>{job.benefits && job.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}</ul>

				<p>
					<strong>Application Deadline:</strong> {new Date(job.application_deadline).toLocaleDateString()}
				</p>
				<p>
					<strong>Contact Information:</strong>
				</p>
				<ul>
					<li>Email: {job.contact_information && job.contact_information.email}</li>
					<li>Phone: {job.contact_information && job.contact_information.phone}</li>
				</ul>

				<p>
					<strong>Job Category:</strong>
					{job.job_category}
				</p>
				<p>
					<strong>Experience Level:</strong> {job.experience_level}
				</p>
				<p>
					<strong>Education:</strong> {job.education}
				</p>

				{job.remote && (
					<p>
						<strong>Remote:</strong> Yes
					</p>
				)}
				{!job.remote && (
					<p>
						<strong>Remote:</strong> No
					</p>
				)}

				<p>
					<strong>How to Apply:</strong> {job.how_to_apply}
				</p>
			</div>
		</div>
	);
};

JobApplicationDetails.propTypes = {
	job: PropTypes.shape({
		title: PropTypes.string.isRequired,
		company: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		date_created: PropTypes.string.isRequired,
		date_updated: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		salary: PropTypes.string.isRequired,
		requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
		responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
		benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
		application_deadline: PropTypes.string.isRequired,
		contact_information: PropTypes.shape({
			email: PropTypes.string.isRequired,
			phone: PropTypes.string.isRequired,
		}).isRequired,
		job_category: PropTypes.string.isRequired,
		experience_level: PropTypes.string.isRequired,
		education: PropTypes.string.isRequired,
		remote: PropTypes.bool.isRequired,
		how_to_apply: PropTypes.string.isRequired,
	}).isRequired,
};

export default JobApplicationDetails;
