import React from "react";
import Required from "../small_blocks/Required";

function Resume() {
	return (
		<section className="resume-coverletter-hear container">
			<h4 className="mt-3">Resume/Cover Letter</h4>
			<div className="row">
				<div className="form-group col-md-6">
					<label htmlFor="resumeInput">
						Resume <Required />
					</label>
					<input type="file" id="resumeInput" className="form-control" name="resume" accept=".pdf,.doc,.docx,.txt" required />
				</div>
				<div className="form-group col-md-6 mt-md-2 mt-lg-0">
					<label htmlFor="cover-letter">Cover Letter</label>
					<input type="file" id="cover-letter" className="form-control" name="cover-letter" accept=".pdf,.doc,.docx,.txt" />
				</div>
			</div>
		</section>
	);
}

export default Resume;
