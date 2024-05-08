import React from "react";

import Required from "../small_blocks/Required";

function InformationTruthfulness() {
	return (
		<section className="information-truthfulness">
			<h4 className="mt-3">Information Truthfulness</h4>
			<div className="form-group">
				<label htmlFor="">
					<input type="checkbox" aria-label="I certify that all the information provided is true" required /> I certify that all the
					information provided in this application is true and complete to the best of my knowledge. <Required />
				</label>
			</div>
		</section>
	);
}

export default InformationTruthfulness;
