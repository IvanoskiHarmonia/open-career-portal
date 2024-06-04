import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from "react";

const EmploymentHistory = forwardRef(({ initialData = [] }, ref) => {
	const [employmentHistory, setEmploymentHistory] = useState([]);
	const initialDataRef = useRef(initialData);

	const addEmploymentHistory = (event) => {
		event.preventDefault();
		const newId = employmentHistory.length > 0 ? employmentHistory[employmentHistory.length - 1].id + 1 : 1;
		setEmploymentHistory([
			...employmentHistory,
			{ id: newId, companyName: "", jobTitle: "", jobStartDate: "", jobEndDate: "", jobDescription: "" },
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
			jobStartDate: item.jobStartDate ? item.jobStartDate.split("T")[0] : "",
			jobEndDate: item.jobEndDate ? item.jobEndDate.split("T")[0] : "",
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
							<label htmlFor={`company-name-${item.id}`}>Company Name {item.id}</label>
							<input
								type="text"
								id={`company-name-${item.id}`}
								name="companyName"
								className="form-control"
								value={item.companyName || ""}
								placeholder={`Company Name ${item.id}`}
								onChange={(event) => handleEmploymentChange(item.id, "companyName", event)}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`job-title-${item.id}`}>Job Title</label>
							<input
								type="text"
								id={`job-title-${item.id}`}
								name="jobTitle"
								className="form-control"
								value={item.jobTitle || ""}
								placeholder={`Job Title ${item.id}`}
								onChange={(event) => handleEmploymentChange(item.id, "jobTitle", event)}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor={`job-start-date-${item.id}`}>Start Date</label>
							<input
								type="date"
								id={`job-start-date-${item.id}`}
								name="jobStartDate"
								className="form-control"
								value={item.jobStartDate}
								onChange={(event) => handleEmploymentChange(item.id, "jobStartDate", event)}
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor={`job-end-date-${item.id}`}>End Date</label>
							<input
								type="date"
								id={`job-end-date-${item.id}`}
								name="jobEndDate"
								className="form-control"
								value={item.jobEndDate}
								onChange={(event) => handleEmploymentChange(item.id, "jobEndDate", event)}
							/>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor={`job-description-${item.id}`}>Job Description</label>
						<textarea
							id={`job-description-${item.id}`}
							name="jobDescription"
							className="form-control"
							value={item.jobDescription || ""}
							placeholder="Job Description"
							onChange={(event) => handleEmploymentChange(item.id, "jobDescription", event)}
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
