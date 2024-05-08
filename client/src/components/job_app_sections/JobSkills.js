import React from "react";

function JobSkills() {
	return (
		<section className="job-skills">
			<h4 className="mt-3">Skills</h4>
			<div className="form-group">
				<label htmlFor="list-of-skills">Skills</label>
				<textarea id="list-of-skills" className="form-control"></textarea>
			</div>
			<div className="form-group">
				<label htmlFor="list-of-certifications">Certifications</label>
				<textarea id="list-of-certifications" className="form-control"></textarea>
			</div>
		</section>
	);
}

export default JobSkills;
