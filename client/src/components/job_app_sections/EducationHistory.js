import React, { useState } from "react";

function EducationHistory() {
	const [educationHistory, setEducationHistory] = useState([
		{ id: 1, schoolName: "", degree: "", major: "", enrollmentDate: "", graduationDate: "", gpa: "" },
	]);

	const addEducationHistory = () => {
		const previous_id = educationHistory[educationHistory.length - 1].id;
		setEducationHistory([
			...educationHistory,
			{ id: previous_id + 1, schoolName: "", degree: "", major: "", enrollmentDate: "", graduationDate: "", gpa: "" },
		]);
	};

	const handleEducationChange = (id, field, event) => {
		const value = event.target.value;
		setEducationHistory((prev) => prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)));
	};

	function removeEducation(index) {
		setEducationHistory((prev) => prev.filter((_, i) => i !== index));
	}

	return (
		<section className="education-history">
			<h4 className="mt-4">Education History</h4>
			{educationHistory.map((item) => (
				<div key={item.id} className="mt-3">
					<button className="btn btn-danger float-right pt-0 pb-0" onClick={() => removeEducation(item.id)}>
						X
					</button>
					<div className="form-group">
						<label htmlFor={`school-name-${item.id}`}>School Name {item.id}</label>
						<input
							type="text"
							id={`school-name-${item.id}`}
							name={`schoolName-${item.id}`}
							value={item.schoolName || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "schoolName", e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`degree-${item.id}`}>Degree</label>
						<input
							type="text"
							id={`degree-${item.id}`}
							name={`degree-${item.id}`}
							value={item.degree || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "degree", e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`major-${item.id}`}>Major</label>
						<input
							type="text"
							id={`major-${item.id}`}
							name={`major-${item.id}`}
							value={item.major || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "major", e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`enrollment-date-${item.id}`}>Enrollment Date</label>
						<input
							type="date"
							id={`enrollment-date-${item.id}`}
							name={`enrollmentDate-${item.id}`}
							value={item.enrollmentDate || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "enrollmentDate", e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`graduation-date-${item.id}`}>Graduation Date</label>
						<input
							type="date"
							id={`graduation-date-${item.id}`}
							name={`graduationDate-${item.id}`}
							value={item.graduationDate || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "graduationDate", e)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor={`gpa-${item.id}`}>GPA</label>
						<input
							type="text"
							id={`gpa-${item.id}`}
							name={`gpa-${item.id}`}
							value={item.gpa || ""}
							className="form-control"
							onChange={(e) => handleEducationChange(item.id, "gpa", e)}
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
