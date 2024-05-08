import React, { useState } from "react";

function EducationHistory() {
	const [educationHistory, setEducationHistory] = useState([
		{ schoolName: "", degree: "", major: "", enrollmentDate: "", graduationDate: "", gpa: "" },
	]);

	const addEducationHistory = () => {
		setEducationHistory([...educationHistory, { schoolName: "", degree: "", major: "", enrollmentDate: "", graduationDate: "", gpa: "" }]);
	};
	const handleEducationChange = (index, event) => {
		const values = [...educationHistory];
		values[index][event.target.name] = event.target.value;
		setEducationHistory(values);
	};

	return (
		<section className="education-history">
			<h4 className="mt-4">Education History</h4>
			{educationHistory.map((item, index) => (
				<div key={index} className="mt-3">
					<div className="form-group">
						<label htmlFor={`school-name-${index}`}>School Name {index + 1}</label>
						<input
							type="text"
							id={`school-name-${index}`}
							name="schoolName"
							className="form-control"
							value={item.schoolName}
							onChange={(event) => handleEducationChange(index, event)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`degree-${index}`}>Degree</label>
						<input
							type="text"
							id={`degree-${index}`}
							name="degree"
							className="form-control"
							value={item.degree}
							onChange={(event) => handleEducationChange(index, event)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`major-${index}`}>Major</label>
						<input
							type="text"
							id={`major-${index}`}
							name="major"
							className="form-control"
							value={item.major}
							onChange={(event) => handleEducationChange(index, event)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`enrollment-date-${index}`}>Enrollment Date</label>
						<input
							type="date"
							id={`enrollment-date-${index}`}
							name="enrollmentDate"
							className="form-control"
							value={item.enrollmentDate}
							onChange={(event) => handleEducationChange(index, event)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`graduation-date-${index}`}>Graduation Date</label>
						<input
							type="date"
							id={`graduation-date-${index}`}
							name="graduationDate"
							className="form-control"
							value={item.graduationDate}
							onChange={(event) => handleEducationChange(index, event)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`gpa-${index}`}>GPA</label>
						<input
							type="number"
							id={`gpa-${index}`}
							name="gpa"
							className="form-control"
							value={item.gpa}
							onChange={(event) => handleEducationChange(index, event)}
						/>
					</div>
				</div>
			))}
			<button className="btn btn-primary mt-3" onClick={addEducationHistory}>
				Add Another Education
			</button>
		</section>
	);
}

export default EducationHistory;
