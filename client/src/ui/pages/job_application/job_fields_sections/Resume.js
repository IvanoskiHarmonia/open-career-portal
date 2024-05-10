import React from "react";
import Required from "../small_blocks/Required";

function Resume() {
	return (
		<section className="resume-coverletter-hear">
			<h4 className="mt-3">Resume</h4>
			<div className="form-group">
				<label htmlFor="resumeInput">
					Resume <Required />
				</label>
				<input type="file" id="resumeInput" className="form-control" accept=".pdf,.doc,.docx,.txt" required />
			</div>
			<h4 className="mt-3">Cover Letter</h4>
			<div className="form-group">
				<label htmlFor="cover-letter">Cover Letter</label>
				<input type="file" id="cover-letter" className="form-control" accept=".pdf,.doc,.docx,.txt" />
			</div>
		</section>
	);
}

export default Resume;
