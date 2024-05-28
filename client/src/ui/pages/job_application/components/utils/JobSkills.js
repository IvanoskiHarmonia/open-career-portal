import React from "react";

function JobSkills() {
	return (
		<section id="job-skills" className="job-skills container">
			<h4 className="mt-3">Skills</h4>
			<div className="row">
				<div className="form-group col-md-6">
					<label htmlFor="list-of-skills">Skills</label>
					<textarea
						id="list-of-skills"
						className="form-control"
						placeholder="Hard-work, persistence, attention to detail, etc..."
					></textarea>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="list-of-certifications">Certifications</label>
					<textarea
						id="list-of-certifications"
						className="form-control"
						placeholder={`Certificiation name: website 1...\nCertificiation name: website 2...`}
					></textarea>
				</div>
			</div>
		</section>
	);
}

export default JobSkills;
