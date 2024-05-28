import React, { useState } from "react";

function References() {
	const [references, setReferences] = useState([]);

	const addReference = (event) => {
		event.preventDefault();
		const newId = references.length > 0 ? references[references.length - 1].id + 1 : 1;
		setReferences([
			...references,
			{
				id: newId + 1,
				reference: "",
				reference_name: "",
				reference_email: "",
				reference_phoneNumber: "",
				reference_company: "",
			},
		]);
	};

	const handleReferenceChange = (id, field, event) => {
		const value = event.target.value;
		setReferences((prev) => prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)));
	};

	function removeReference(id, event) {
		event.preventDefault();
		setReferences((prev) => prev.filter((entry) => entry.id !== id));
	}

	return (
		<section id="references" className="references container">
			<h4 className="mt-3">References</h4>
			{references.map((item) => (
				<div key={item.id} className="mt-3">
					<button className="btn btn-danger float-right pt-0 pb-0" onClick={(event) => removeReference(item.id, event)}>
						X
					</button>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor={`reference-${item.id}`}>Reference {item.id} Relationship</label>
							<input
								type="text"
								id={`reference-${item.id}`}
								name={`reference-${item.id}`}
								autoComplete={`reference-${item.id}`}
								className="form-control"
								value={item.reference}
								placeholder="Professional, Personal, etc..."
								onChange={(event) => handleReferenceChange(item.id, "reference", event)}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`reference-name-${item.id}`}>Reference {item.id} Name</label>
							<input
								type="text"
								id={`reference-name-${item.id}`}
								name={`reference-name-${item.id}`}
								autoComplete={`reference_name-${item.id}`}
								className="form-control"
								value={item.reference_name}
								placeholder="First Last"
								onChange={(event) => handleReferenceChange(item.id, "reference_name", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`reference-email-${item.id}`}>Reference {item.id} Email</label>
							<input
								type="email"
								id={`reference-email-${item.id}`}
								name={`reference-email-${item.id}`}
								autoComplete={`reference_email-${item.id}`}
								className="form-control"
								value={item.reference_email}
								placeholder="example@gmail.com"
								onChange={(event) => handleReferenceChange(item.id, "reference_email", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`reference-phoneNumber-${item.id}`}>Reference {item.id} Phone Number</label>
							<input
								type="tel"
								id={`reference-phoneNumber-${item.id}`}
								name={`reference-phoneNumber-${item.id}`}
								autoComplete={`reference_phoneNumber-${item.id}`}
								className="form-control"
								value={item.reference_phoneNumber}
								placeholder="+1 123-456-7890"
								onChange={(event) => handleReferenceChange(item.id, "reference_phoneNumber", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`reference-company-${item.id}`}>Reference {item.id} Company</label>
							<input
								type="text"
								id={`reference-company-${item.id}`}
								name={`reference-company-${item.id}`}
								autoComplete={`reference_company-${item.id}`}
								className="form-control"
								value={item.reference_company}
								placeholder="Company Name"
								onChange={(event) => handleReferenceChange(item.id, "reference_company", event)}
							/>
						</div>
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
