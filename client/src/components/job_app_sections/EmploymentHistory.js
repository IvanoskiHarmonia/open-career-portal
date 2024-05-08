import React, { useState } from "react";

function EmploymentHistory() {
	const [employmentHistory, setEmploymentHistory] = useState([{ companyName: "", jobTitle: "", startDate: "", endDate: "", jobDescription: "" }]);

	const addEmploymentHistory = () => {
		setEmploymentHistory([...employmentHistory, { companyName: "", jobTitle: "", startDate: "", endDate: "", jobDescription: "" }]);
	};

	const handleEmploymentChange = (index, event) => {
		const values = [...employmentHistory];
		values[index][event.target.name] = event.target.value;
		setEmploymentHistory(values);
	};

	return (
		<section className="employement-history">
			<h4 className="mt-3">Employment History</h4>
			{employmentHistory.map((item, index) => (
				<div key={index} className="mt-3">
					<div className="form-group">
						<label htmlFor={`company-name-${index}`}>Company Name {index + 1}</label>
						<input
							type="text"
							id={`company-name-${index}`}
							name="companyName"
							className="form-control"
							value={item.companyName}
							onChange={(event) => handleEmploymentChange(index, event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`job-title-${index}`}>Job Title</label>
						<input
							type="text"
							id={`job-title-${index}`}
							name="jobTitle"
							className="form-control"
							value={item.jobTitle}
							onChange={(event) => handleEmploymentChange(index, event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`job-start-date-${index}`}>Start Date</label>
						<input
							type="date"
							id={`job-start-date-${index}`}
							name="startDate"
							className="form-control"
							value={item.startDate}
							onChange={(event) => handleEmploymentChange(index, event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`job-end-date-${index}`}>End Date</label>
						<input
							type="date"
							id={`job-end-date-${index}`}
							name="endDate"
							className="form-control"
							value={item.endDate}
							onChange={(event) => handleEmploymentChange(index, event)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`job-description-${index}`}>Job Description</label>
						<textarea
							name="jobDescription"
							id={`job-description-${index}`}
							className="form-control"
							value={item.jobDescription}
							onChange={(event) => handleEmploymentChange(index, event)}
						></textarea>
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
