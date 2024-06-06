import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import Required from "../../small_blocks/Required";

const EmploymentHistory = forwardRef(({ initialData = [] }, ref) => {
	const [employmentHistory, setEmploymentHistory] = useState([]);
	const initialDataRef = useRef(initialData);

	const addEmploymentHistory = (event) => {
		event.preventDefault();
		const newId = employmentHistory.length > 0 ? employmentHistory[employmentHistory.length - 1].id + 1 : 1;
		setEmploymentHistory([
			...employmentHistory,
			{ id: newId, companyName: "", companyJobTitle: "", companyJobStartDate: "", companyJobEndDate: "", companyJobDescription: "" },
		]);
	};

	const handleEmploymentChange = (id, field, event) => {
		let value = event.target.value;
		setEmploymentHistory((prev) => prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)));
	};

	function removeEmployment(id, event) {
		event.preventDefault();
		setEmploymentHistory((prev) => prev.filter((entry) => entry.id !== id));
	}

	useImperativeHandle(ref, () => ({
		getEmploymentHistory: () => employmentHistory,
	}));

	useEffect(() => {
		if (initialData.length === 0) return;
		const formattedData = initialData.map((item, index) => ({
			...item,
			id: index + 1,
			companyJobStartDate: item.companyJobStartDate ? item.companyJobStartDate.split("T")[0] : "",
			companyJobEndDate: item.companyJobEndDate ? item.companyJobEndDate.split("T")[0] : "",
		}));
		if (JSON.stringify(initialDataRef.current) !== JSON.stringify(initialData)) {
			setEmploymentHistory(formattedData);
			initialDataRef.current = formattedData;
		}
	}, [initialData]);

	return (
		<section id="employment-history" className="employement-history container">
			<h4 className="mt-3">Employment History</h4>
			{employmentHistory.map((item) => (
				<div key={item.id} className="mt-3">
					<button className="btn btn-danger float-right pt-0 pb-0" onClick={(event) => removeEmployment(item.id, event)}>
						X
					</button>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor={`companyName-${item.id}`}>Company Name {item.id}</label>
							<Required />
							<input
								type="text"
								id={`companyName-${item.id}`}
								name="companyName"
								className="form-control"
								value={item.companyName || ""}
								placeholder={`Company Name ${item.id}`}
								onChange={(event) => handleEmploymentChange(item.id, "companyName", event)}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`companyJobTitle-${item.id}`}>Job Title</label>
							<Required />
							<input
								type="text"
								id={`companyJobTitle-${item.id}`}
								name="companyJobTitle"
								className="form-control"
								value={item.companyJobTitle || ""}
								placeholder={`Job Title ${item.id}`}
								onChange={(event) => handleEmploymentChange(item.id, "companyJobTitle", event)}
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor={`companyJobStartDate-${item.id}`}>Start Date</label>
							<Required />
							<input
								type="date"
								id={`companyJobStartDate-${item.id}`}
								name="companyJobStartDate"
								className="form-control"
								value={item.companyJobStartDate}
								onChange={(event) => handleEmploymentChange(item.id, "companyJobStartDate", event)}
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`companyJobEndDate-${item.id}`}>End Date</label>
							<Required />
							<input
								type="date"
								id={`companyJobEndDate-${item.id}`}
								name="companyJobEndDate"
								className="form-control"
								value={item.companyJobEndDate}
								onChange={(event) => handleEmploymentChange(item.id, "companyJobEndDate", event)}
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor={`companyJobDescription-${item.id}`}>Job Description</label>
						<Required />
						<textarea
							id={`companyJobDescription-${item.id}`}
							name="companyJobDescription"
							className="form-control"
							value={item.companyJobDescription || ""}
							placeholder="Job Description"
							onChange={(event) => handleEmploymentChange(item.id, "companyJobDescription", event)}
							required
						/>
					</div>
				</div>
			))}
			<button className="btn btn-primary mt-3" onClick={addEmploymentHistory}>
				Add Another Job
			</button>
		</section>
	);
});

export default EmploymentHistory;
