import React, { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";

const References = forwardRef(({ initialData = [] }, ref) => {
	const [references, setReferences] = useState([]);
	const initialDataRef = useRef(initialData);

	const addReference = (event) => {
		event.preventDefault();
		const newId = references.length > 0 ? references[references.length - 1].id + 1 : 1;
		setReferences([
			...references,
			{
				id: newId,
				referenceRelationship: "",
				referenceName: "",
				referenceEmail: "",
				referencePhoneNumber: "",
				referenceCompany: "",
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

	useImperativeHandle(ref, () => ({
		getReferences: () => references,
	}));

	useEffect(() => {
		if (initialData.length === 0) return;
		const formattedData = initialData.map((item, index) => ({
			...item,
			id: index + 1,
		}));
		if (JSON.stringify(initialDataRef.current) !== JSON.stringify(initialData)) {
			setReferences(formattedData);
			initialDataRef.current = formattedData;
		}
	}, [initialData]);

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
								id={`referenceRelationship-${item.id}`}
								name="referenceRelationship"
								className="form-control"
								value={item.referenceRelationship}
								placeholder="Professional, Personal, etc..."
								onChange={(event) => handleReferenceChange(item.id, "referenceRelationship", event)}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`referenceName-${item.id}`}>Reference {item.id} Name</label>
							<input
								type="text"
								id={`referenceName-${item.id}`}
								name="referenceName"
								className="form-control"
								value={item.referenceName}
								placeholder="First Last"
								onChange={(event) => handleReferenceChange(item.id, "referenceName", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`referenceEmail-${item.id}`}>Reference {item.id} Email</label>
							<input
								type="email"
								id={`referenceEmail-${item.id}`}
								name="referenceEmail"
								className="form-control"
								value={item.referenceEmail}
								placeholder="example@gmail.com"
								onChange={(event) => handleReferenceChange(item.id, "referenceEmail", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`referencePhoneNumber-${item.id}`}>Reference {item.id} Phone Number</label>
							<input
								type="tel"
								id={`reference-phoneNumber-${item.id}`}
								name="referencePhoneNumber"
								className="form-control"
								value={item.referencePhoneNumber}
								placeholder="+1 123-456-7890"
								onChange={(event) => handleReferenceChange(item.id, "referencePhoneNumber", event)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`referenceCompany-${item.id}`}>Reference {item.id} Company</label>
							<input
								type="text"
								id={`referenceCompany-${item.id}`}
								name="referenceCompany"
								className="form-control"
								value={item.referenceCompany}
								placeholder="Company Name"
								onChange={(event) => handleReferenceChange(item.id, "referenceCompany", event)}
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
});

export default References;
