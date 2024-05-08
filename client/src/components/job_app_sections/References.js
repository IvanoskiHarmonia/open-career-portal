import React, { useState } from "react";

function References() {
	const [references, setReferences] = useState([{ relationship: "", name: "", email: "", phoneNumber: "", company: "" }]);

	const addReference = () => {
		setReferences([...references, { relationship: "", name: "", email: "", phoneNumber: "", company: "" }]);
	};

	const handleReferenceChange = (index, event) => {
		const values = [...references];
		values[index][event.target.name] = event.target.value;
		setReferences(values);
	};

	return (
		<section className="references">
			<h4 className="mt-3">References</h4>
			{references.map((item, index) => (
				<div key={index} className="mt-3">
					<div className="form-group">
						<label htmlFor={`relationship-${index}`}>Relationship {index + 1}</label>
						<input
							type="text"
							id={`relationship-${index}`}
							name="relationship"
							className="form-control"
							value={item.relationship}
							onChange={(event) => handleReferenceChange(index, event)}
						/>
						<label htmlFor={`relationship-name-${index}`}>Reference {index + 1} Name</label>
						<input
							type="text"
							id={`relationship-name-${index}`}
							name="name"
							className="form-control"
							value={item.name}
							onChange={(event) => handleReferenceChange(index, event)}
						/>
						<label htmlFor={`relationship-email-${index}`}>Reference {index + 1} Email</label>
						<input
							type="email"
							id={`relationship-email-${index}`}
							name="email"
							className="form-control"
							value={item.email}
							onChange={(event) => handleReferenceChange(index, event)}
						/>
						<label htmlFor={`relationship-phone-${index}`}>Reference {index + 1} Phone Number</label>
						<input
							type="tel"
							id={`relationship-phone-${index}`}
							name="phoneNumber"
							className="form-control"
							value={item.phoneNumber}
							onChange={(event) => handleReferenceChange(index, event)}
						/>
						<label htmlFor={`relationship-company-${index}`}>Reference {index + 1} Company</label>
						<input
							type="text"
							id={`relationship-company-${index}`}
							name="company"
							className="form-control"
							value={item.company}
							onChange={(event) => handleReferenceChange(index, event)}
						/>
					</div>
				</div>
			))}
			<button className="btn btn-primary mt-3" onClick={addReference}>
				Add Another Reference
			</button>
		</section>
	);
}

export default References;
