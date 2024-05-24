import React from "react";
import Required from "../small_blocks/Required";

function ContactInfo() {
	return (
		<section id="contact-info" className="contact-info container">
			<h4 className="mt-3">Contact Information</h4>
			<div className="row">
				<div className="form-group col-md-5">
					<label htmlFor="first-name">First Name</label>
					<Required />
					<input type="text" name="personalFirstName" id="first-name" className="form-control" placeholder="Clara" required />
				</div>
				<div className="form-group col-md-2">
					<label htmlFor="middle-name">Middle Initial</label>
					<input type="text" id="middle-initial" name="personalMiddleInitial" className="form-control" placeholder="J" />
				</div>
				<div className="form-group col-md-5">
					<label htmlFor="last-name">Last Name</label>
					<Required />
					<input type="text" id="last-name" name="personalLastName" className="form-control" placeholder="Thompson" required />
				</div>
			</div>
			<div className="row my-lg-2 my-md-0">
				<div className="form-group col-md-6">
					<label htmlFor="form-email">Email</label>
					<Required />
					<input type="email" id="form-email" name="personalEmail" className="form-control" placeholder="example@gmail.com" required />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="phone-number">Phone Number</label>
					<Required />
					<input
						type="tel"
						id="phone-number"
						name="personalPhoneNumber"
						className="form-control"
						placeholder="+1 (123) 456-7890"
						required
					/>
				</div>
			</div>
			<div className="row my-lg-2 my-md-0">
				<div className="form-group col-md-6">
					<label htmlFor="address-line-1">Address Line 1</label>
					<Required />
					<input
						id="address-line-1"
						name="personalAddress1"
						type="text"
						className="form-control"
						placeholder="1100 Congress Ave."
						required
					/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="address-line-2">Address Line 2</label>
					<input type="text" id="address-line-2" name="personalAddress2" className="form-control" placeholder="Apt #5132" />
				</div>
			</div>
			<div className="row my-lg-2 my-md-0">
				<div className="form-group col-md-3">
					<label htmlFor="city">City</label>
					<Required />
					<input type="text" id="city" name="personalCity" className="form-control" placeholder="Austin" required />
				</div>
				<div className="form-group col-md-3">
					<label htmlFor="province-state">Province/State</label>
					<Required />
					<input type="text" id="province-state" name="personalState" className="form-control" placeholder="Texas" required />
				</div>
				<div className="form-group col-md-3">
					<label htmlFor="zip-code">Postal/Zip Code</label>
					<Required />
					<input type="text" id="zip-code" name="personalZipCode" className="form-control" placeholder="78701" required />
				</div>
				<div className="form-group col-md-3">
					<label htmlFor="country-region">Country/Region </label>
					<Required />
					<input type="text" id="country-region" name="personalCountry" className="form-control" placeholder="US" required />
				</div>
			</div>
		</section>
	);
}

export default ContactInfo;
