import React from "react";

import Required from "../../small_blocks/Required";
import { Link } from "react-router-dom";

function Signature() {
	return (
		<section id="signature" className="signature container">
			<h4 className="mt-3">Signature</h4>
			<div className="row">
				<div className="form-group col-md-4">
					<label htmlFor="signature-name">Your Name </label>
					<Required />
					<input type="text" id="signature-name" name="signatureName" className="form-control" placeholder="First Last" required />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="employee-id">Employee ID (if applicable)</label>
					<input type="text" id="employee-id" name="employeeId" className="form-control" placeholder="89328413..." />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="signature-date">Today's Date</label>
					<Required />
					<input id="signature-date" type="date" name="signatureDate" className="form-control" required />
				</div>
				<div className="form-group mt-3">
					<label htmlFor="confirm-signature" style={{ display: "inline" }}>
						<input
							type="checkbox"
							id="confirm-signature"
							name="confirmSignature"
							aria-label="By checking this box, you agree that this is equivalent to a handwritten signature and that you accept our Privacy Policy and Terms of Service."
							required
						/>{" "}
						By checking this box, you agree that this is equivalent to a handwritten signature and that you accept our
					</label>{" "}
					<Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
						Privacy Policy
					</Link>{" "}
					and{" "}
					<Link to="/terms-of-service" target="_blank" rel="noopener noreferrer">
						Terms of Service
					</Link>
					.
					<Required />
				</div>
			</div>
		</section>
	);
}

export default Signature;
