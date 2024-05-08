import React from "react";

function Opportunity() {
	return (
		<section className="lead-opportunity">
			<h4 className="mt-3">How did you hear about us?</h4>
			<div className="form-group">
				<label htmlFor="hear-about-us">How did you hear about us?</label>
				<select id="hear-about-us" className="form-control">
					<option value="">Select an option</option>
					<option value="LinkedIn">LinkedIn</option>
					<option value="Indeed">Indeed</option>
					<option value="Glassdoor">Glassdoor</option>
					<option value="Referral">Referral</option>
					<option value="Other">Other</option>
				</select>
			</div>
		</section>
	);
}

export default Opportunity;
