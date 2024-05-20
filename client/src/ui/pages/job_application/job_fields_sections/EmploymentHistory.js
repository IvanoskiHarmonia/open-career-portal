import React, { useState } from "react";

function EmploymentHistory() {
	const [employmentHistory, setEmploymentHistory] = useState([
		{ id: 1, companyName: "", jobTitle: "", jobStartDate: "", jobEndDate: "", jobDescription: "" },
	]);

	const addEmploymentHistory = () => {
		const previous_id = employmentHistory[employmentHistory.length - 1].id;
		setEmploymentHistory([
			...employmentHistory,
			{ id: previous_id + 1, companyName: "", jobTitle: "", jobStartDate: "", jobEndDate: "", jobDescription: "" },
		]);
	};

	const handleEmploymentChange = (id, field, event) => {
		const value = event.target.value;
		setEmploymentHistory((prev) => prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)));
	};

	function removeEmployment(index) {
		setEmploymentHistory((prev) => prev.filter((_, i) => i !== index));
	}

	return (
		<section className="employement-history container">
			<h4 className="mt-3">Employment History</h4>
			{employmentHistory.map((item) => (
				<div key={item.id} className="mt-3">
					<button className="btn btn-danger float-right pt-0 pb-0" onClick={() => removeEmployment(item.id)}>
						X
					</button>
					<div className="row">
						<div className="form-group col-md-6">
							<label htmlFor={`company-name-${item.id}`}>Company Name {item.id}</label>
							<input
								type="text"
								id={`company-name-${item.id}`}
								name={`companyName-${item.id}`}
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
								name={`jobTitle-${item.id}`}
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
								name={`jobStartDate-${item.id}`}
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
								name={`jobEndDate-${item.id}`}
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
							name={`jobDescription-${item.id}`}
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
}

export default EmploymentHistory;
