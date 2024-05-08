import React from "react";

import Required from "../small_blocks/Required";

function WorkEligibility() {
	return (
		<section className="work-eligibility">
			<h4 className="mt-3">Work Eligibility</h4>
			<div className="form-group">
				<label>
					Are you legally eligible to work in the US? <Required />
				</label>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="yes" name="usWorkEligibility" value="yes" required />
					<label className="form-check-label" htmlFor="yes">
						Yes
					</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="no" name="usWorkEligibility" value="no" />
					<label className="form-check-label" htmlFor="no">
						No
					</label>
				</div>
			</div>
			<div className="form-group">
				<label>
					Are you willing to relocate? <Required />
				</label>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="yes" name="relocate" value="yes" required />
					<label className="form-check-label" htmlFor="yes">
						Yes
					</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="no" name="relocate" value="no" />
					<label className="form-check-label" htmlFor="no">
						No
					</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="notSure" name="relocate" value="notSure" />
					<label className="form-check-label" htmlFor="notSure">
						Not Sure
					</label>
				</div>
				<div className="form-group">
					<label>
						Have you ever been convicted of a felony? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="felony" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="felony" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="felon-explanation">If yes, please explain</label>
					<textarea id="felon-explanation" className="form-control"></textarea>
				</div>
				<div className="form-group">
					<label>
						Are you willing to undergo a background check? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="backgroundCheck" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="backgroundCheck" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>
						Are you willing to undergo a drug test? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="drugTest" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="drugTest" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>
						Are you willing to work overtime? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="overtime" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="overtime" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>
						Are you willing to work weekends? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="weekends" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="weekends" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>
						Are you willing to travel? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="travel" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="travel" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>
						Are you willing to work remotely? <Required />
					</label>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="yes" name="remote" value="yes" required />
						<label className="form-check-label" htmlFor="yes">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input className="form-check-input" type="radio" id="no" name="remote" value="no" />
						<label className="form-check-label" htmlFor="no">
							No
						</label>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkEligibility;
