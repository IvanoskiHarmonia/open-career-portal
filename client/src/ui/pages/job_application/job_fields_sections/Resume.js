import React from "react";
import Required from "../small_blocks/Required";

function Resume() {
	return (
		<section id="resume-coverletter" className="resume-coverletter-hear container">
			<h4 className="mt-3">Resume/Cover Letter</h4>
			<div className="row">
				<div className="form-group col-md-6">
					<label htmlFor="resume">
						Resume <Required />
					</label>
					<input type="file" id="resume" className="form-control" name="resume" accept=".pdf,.doc,.docx,.txt" required />
				</div>
				<div className="form-group col-md-6 mt-md-2 mt-lg-0">
					<label htmlFor="coverLetter">Cover Letter</label>
					<input type="file" id="coverLetter" className="form-control" name="coverLetter" accept=".pdf,.doc,.docx,.txt" />
				</div>
			</div>
		</section>
	);
}

export default Resume;
