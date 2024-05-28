import React from "react";

import Required from "../../small_blocks/Required";

function WorkEligibility() {
	return (
		<section id="work-eligibility" className="work-eligibility container">
			<h4 className="mt-3">Work Eligibility</h4>
			<div className="form-group">
				<label>Are you legally eligible to work in the US?</label>
				<Required />
				<div className="form-check">
					<input className="form-check-input" type="radio" id="yes-usWorkEligibility" name="usWorkEligibility" value="yes" required />
					<label className="form-check-label" htmlFor="yes-usWorkEligibility">
						Yes
					</label>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" id="no-usWorkEligibility" name="usWorkEligibility" value="no" />
					<label className="form-check-label" htmlFor="no-usWorkEligibility">
						No
					</label>
				</div>
			</div>
			<div className="form-group">
				<label>Are you willing to relocate?</label>
				<Required />
				<div className="form-check">
					<input type="radio" className="form-check-input" id="yes-relocate" name="relocate" value="yes" required />
					<label className="form-check-label" htmlFor="yes-relocate">
						Yes
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="no-relocate" name="relocate" value="no" />
					<label className="form-check-label" htmlFor="no-relocate">
						No
					</label>
				</div>
				<div className="form-check">
					<input type="radio" className="form-check-input" id="notSure-relocate" name="relocate" value="notSure" />
					<label className="form-check-label" htmlFor="notSure-relocate">
						Not Sure
					</label>
				</div>
				<div className="form-group">
					<label>Have you ever been convicted of a felony?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-felony" name="felony" value="yes" required />
						<label className="form-check-label" htmlFor="yes-felony">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-felony" name="felony" value="no" />
						<label className="form-check-label" htmlFor="no-felony">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="felon-explanation">If yes, please explain</label>
					<textarea id="felon-explanation" className="form-control"></textarea>
				</div>
				<div className="form-group">
					<label>Are you willing to undergo a background check?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-backgroundCheck" name="backgroundCheck" value="yes" required />
						<label className="form-check-label" htmlFor="yes-backgroundCheck">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-backgroundCheck" name="backgroundCheck" value="no" />
						<label className="form-check-label" htmlFor="no-backgroundCheck">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>Are you willing to undergo a drug test?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-drugTest" name="drugTest" value="yes" required />
						<label className="form-check-label" htmlFor="yes-drugTest">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-drugTest" name="drugTest" value="no" />
						<label className="form-check-label" htmlFor="no-drugTest">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>Are you willing to work overtime?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-overtime" name="overtime" value="yes" required />
						<label className="form-check-label" htmlFor="yes-overtime">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-overtime" name="overtime" value="no" />
						<label className="form-check-label" htmlFor="no-overtime">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>Are you willing to work weekends?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-weekends" name="weekends" value="yes" required />
						<label className="form-check-label" htmlFor="yes-weekends">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-weekends" name="weekends" value="no" />
						<label className="form-check-label" htmlFor="no-weekends">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>Are you willing to travel?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-travel" name="travel" value="yes" required />
						<label className="form-check-label" htmlFor="yes-travel">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-travel" name="travel" value="no" />
						<label className="form-check-label" htmlFor="no-travel">
							No
						</label>
					</div>
				</div>
				<div className="form-group">
					<label>Are you willing to work remotely?</label>
					<Required />
					<div className="form-check">
						<input type="radio" className="form-check-input" id="yes-remote" name="remote" value="yes" required />
						<label className="form-check-label" htmlFor="yes-remote">
							Yes
						</label>
					</div>
					<div className="form-check">
						<input type="radio" className="form-check-input" id="no-remote" name="remote" value="no" />
						<label className="form-check-label" htmlFor="no-remote">
							No
						</label>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WorkEligibility;
