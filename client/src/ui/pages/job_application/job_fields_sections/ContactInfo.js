import React from "react";
import Required from "../small_blocks/Required";
import { states } from "../../../modules/components/constants/States";

function ContactInfo() {
	return (
		<section className="contact-info">
			<h4 className="mt-3">Contact Information</h4>
			<div className="form-group">
				<label htmlFor="first-name">First Name</label>
				<Required />
				<input type="text" name="personalFirstName" id="first-name" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="last-name">Last Name</label>
				<Required />
				<input type="text" id="last-name" name="personalLastName" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="form-email">Email</label>
				<Required />
				<input type="email" id="form-email" name="personalEmail" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="phone-number">Phone Number</label>
				<Required />
				<input type="tel" id="phone-number" name="personalPhoneNumber" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="address-line-1">Address Line 1</label>
				<Required />
				<input id="address-line-1" name="personalAddress1" type="text" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="address-line-2">Address Line 2</label>
				<input type="text" id="address-line-2" name="personalAddress2" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="city">City</label>
				<Required />
				<input type="text" id="city" name="personalCity" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="province-state">Province/State</label>
				<Required />
				<select id="province-state" name="personalState" className="form-control" required>
					<option value="">Select a province/state</option>
					{Object.entries(states).map(([value, label]) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="zip-code">Postal/Zip Code</label>
				<Required />
				<input type="text" id="zip-code" name="personalZipCode" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="country-region">Country/Region </label>
				<Required />
				<select id="country-region" name="personalCountry" className="form-control" required>
					<option value="">Select a country/region</option>
					<option value="CA">Canada</option>
					<option value="US">United States</option>
				</select>
			</div>
		</section>
	);
}

export default ContactInfo;
