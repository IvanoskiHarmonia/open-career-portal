import React from "react";
import Required from "../small_blocks/Required";

function ContactInfo() {
	return (
		<section className="contact-info">
			<h4 className="mt-3">Contact Information</h4>
			<div className="form-group">
				<label htmlFor="first-name">First Name </label>
				<Required />
				<input type="text" id="first-name" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="last-name">Last Name </label>
				<Required />
				<input id="last-name" type="text" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="form-email">Email </label>
				<Required />
				<input id="form-email" type="email" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="phone-number">Phone Number </label>
				<Required />
				<input id="phone-number" type="tel" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="address-line-1">Address Line 1 </label>
				<Required />
				<input id="address-line-1" type="text" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="address-line-2">Address Line 2</label>
				<input id="address-line-2" type="text" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="city">City</label>
				<Required />
				<input id="city" type="text" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="province-state">Province/State </label>
				<Required />
				<select id="province-state" className="form-control" required>
					<option value="">Select a province/state</option>
					<option value="AB">Alberta</option>
					<option value="BC">British Columbia</option>
					<option value="MB">Manitoba</option>
					<option value="NB">New Brunswick</option>
					<option value="NL">Newfoundland and Labrador</option>
					<option value="NS">Nova Scotia</option>
					<option value="ON">Ontario</option>
					<option value="PE">Prince Edward Island</option>
					<option value="QC">Quebec</option>
					<option value="SK">Saskatchewan</option>
					<option value="NT">Northwest Territories</option>
					<option value="NU">Nunavut</option>
					<option value="YT">Yukon</option>
				</select>
			</div>
			<div className="form-group">
				<label htmlFor="zip-code">Postal/Zip Code </label>
				<Required />
				<input id="zip-code" type="text" className="form-control" required />
			</div>
			<div className="form-group">
				<label htmlFor="country-region">Country/Region </label>
				<Required />
				<select id="country-region" className="form-control" required>
					<option value="">Select a country/region</option>
					<option value="CA">Canada</option>
					<option value="US">United States</option>
				</select>
			</div>
		</section>
	);
}

export default ContactInfo;
