import React from "react";

import Required from "../small_blocks/Required";

function Signature() {
	return (
		<section className="signature">
			<h4 className="mt-3">Signature</h4>
			<div className="form-group">
				<label htmlFor="signature-name">Your Name </label>
				<Required />
				<input type="text" id="signature-name" name="signature-name" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="signature-date">Today's Date</label>
				<Required />
				<input id="signature-date" type="date" name="signature-date" className="form-control" required />
			</div>
			<div className="form-group mt-3">
				<label>
					<input type="checkbox" area-label="Checking the checkbox is equivalent to a handwritten signature." required /> Checking the
					checkbox is equivalent to a handwritten signature.
				</label>
				<Required />
			</div>
		</section>
	);
}

export default Signature;
