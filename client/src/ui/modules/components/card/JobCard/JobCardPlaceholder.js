import React from "react";
import "./JobCard.css";

const JobCardPlaceholder = () => {
	return (
		<div className="card my-3 shadow-sm" aria-hidden="true">
			<div className="card-body">
				<div className="d-flex justify-content-between align-items-center">
					<p className="card-text mb-2 placeholder-glow col-3">
						<span className="placeholder col-12 bg-dark"></span>
					</p>
					<p className="card-text text-muted small placeholder-glow col-3">
						<span className="placeholder col-12"></span>
					</p>
				</div>
				<p className="card-text text-muted placeholder-glow col-2 mb-1">
					<span className="placeholder col-12 placeholder-xs"></span>
				</p>
				<div className="d-flex justify-content-between align-items-center">
					<p className="card-text placeholder-glow col-4">
						<span className="placeholder col-12"></span>
					</p>
					<p className="card-text placeholder-glow col-2">
						<span className="placeholder col-12"></span>
					</p>
				</div>
				<div className="d-flex justify-content-between align-items-center">
					<p className="card-text placeholder-glow col-4">
						<span className="placeholder col-12"></span>
					</p>
					<p className="card-text placeholder-glow col-1">
						<span className="placeholder col-12"></span>
					</p>
				</div>
				<div className="d-flex justify-content-between align-items-center placeholder-glow">
					<span className="placeholder col-2"></span>
				</div>
				<hr />
				<div className="clamp-2">
					<p className="placeholder-glow">
						<span className="placeholder col-12"></span>
					</p>
					<p className="placeholder-glow">
						<span className="placeholder col-12"></span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default JobCardPlaceholder;
