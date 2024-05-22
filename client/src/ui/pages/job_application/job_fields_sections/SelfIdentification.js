import React from "react";

import Required from "../small_blocks/Required";

function SelfIdentificiation() {
	return (
		<section className="self-identification container">
			<h4 className="mt-3">Voluntary Equal Employment Opportunity Self-Identification</h4>
			<div className="form-group">
				<label htmlFor="gender">What is your Gender? </label>
				<Required />
				<select id="gender" name="gender" autoComplete="gender" className="form-control" required>
					<option value="">Select an option</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="optOut">Opt Out</option>
				</select>
			</div>
			<div className="form-group mt-2">
				<label htmlFor="race-ethnicity-bg">What is your Race/Ethnic background? </label>
				<Required />
				<select id="race-ethnicity-bg" name="raceEthnicity" autoComplete="race-ethnicity-bg" className="form-control" required>
					<option value="">Select an option</option>
					<option value="white">White</option>
					<option value="hispanic">Hispanic or Latino</option>
					<option value="black">Black or African American</option>
					<option value="hawaiian">Native Hawaiian or Other Pacific Islander</option>
					<option value="asian">Asian</option>
					<option value="native">American Indian or Alaska Native</option>
					<option value="optOut">Opt Out</option>
				</select>
			</div>
			<h4 className="mt-3">Voluntary Self-Identification of Disability</h4>
			<div className="form-group">
				<label>Do you have a disability? </label>
				<Required />
				<div className="form-check">
					<input type="radio" className="form-check-input" id="yes-disability" name="disability" value="yes" required />
					<label className="form-check-label" htmlFor="yes-disability">
						Yes, I have a disability (or previously had a disability)
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="no-disability" name="disability" value="no" />
					<label className="form-check-label" htmlFor="no-disability">
						No, I do not have a disability
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="optOut-disability" name="disability" value="optOut" />
					<label className="form-check-label" htmlFor="optOut-disability">
						I do not wish to answer
					</label>
				</div>
			</div>
			<h4 className="mt-3">Voluntary Self-Identification of Veteran Status</h4>
			<div className="form-group">
				<label>Are you a veteran? </label>
				<Required />
				<div className="form-check">
					<input type="radio" className="form-check-input" id="yes-veteran" name="veteran" value="yes" required />
					<label className="form-check-label" htmlFor="yes-veteran">
						Yes, I am a veteran
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="no-veteran" name="veteran" value="no" />
					<label className="form-check-label" htmlFor="no-veteran">
						No, I am not a veteran
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="optOut-veteran" name="veteran" value="optOut" />
					<label className="form-check-label" htmlFor="optOut-veteran">
						I do not wish to answer
					</label>
				</div>
			</div>
		</section>
	);
}

export default SelfIdentificiation;
