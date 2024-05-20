import React from "react";

import Required from "../small_blocks/Required";

function Signature() {
	return (
		<section className="signature container">
			<h4 className="mt-3">Signature</h4>
			<div className="row">
				<div className="form-group col-md-4">
					<label htmlFor="signature-name">Your Name </label>
					<Required />
					<input type="text" id="signature-name" name="signature-name" className="form-control" placeholder="First Last" required />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="employee-id">Employee ID (if applicable)</label>
					<input type="text" id="employee-id" name="employee-id" className="form-control" placeholder="89328413..." />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="signature-date">Today's Date</label>
					<Required />
					<input id="signature-date" type="date" name="signature-date" className="form-control" required />
				</div>
				<div className="form-group mt-3">
					<label>
						<input type="checkbox" area-label="Checking the checkbox is equivalent to a handwritten signature." required /> Checking the
						checkbox is equivalent to a handwritten signature.
					</label>
				</div>
			</div>
		</section>
	);
}

export default Signature;
