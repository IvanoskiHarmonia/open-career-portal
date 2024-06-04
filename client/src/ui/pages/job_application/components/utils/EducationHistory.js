import React, { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";

const EducationHistory = forwardRef(({ initialData = [] }, ref) => {
	const [educationHistory, setEducationHistory] = useState([]);
	const initialDataRef = useRef(initialData);

	const addEducationHistory = (event) => {
		event.preventDefault();
		const newId = educationHistory.length > 0 ? educationHistory[educationHistory.length - 1].id + 1 : 1;
		setEducationHistory([
			...educationHistory,
			{ id: newId, schoolName: "", degree: "", major: "", enrollmentDate: "", graduationDate: "", graduated: "", gpa: "" },
		]);
	};

	const handleEducationChange = (id, field, event) => {
		const value = event.target.value;
		setEducationHistory((prev) => prev.map((entry) => (entry.id === id ? { ...entry, [field]: value } : entry)));
	};

	function removeEducation(id, event) {
		event.preventDefault();
		setEducationHistory((prev) => prev.filter((entry) => entry.id !== id));
	}

	useImperativeHandle(ref, () => ({
		getEducationHistory: () => educationHistory,
	}));

	useEffect(() => {
		const formattedData = initialData.map((item, index) => ({
			...item,
			id: index + 1,
			enrollmentDate: item.enrollmentDate ? item.enrollmentDate.split("T")[0] : "",
			graduationDate: item.graduationDate ? item.graduationDate.split("T")[0] : "",
		}));
		if (JSON.stringify(initialDataRef.current) !== JSON.stringify(initialData)) {
			setEducationHistory(formattedData);
			initialDataRef.current = formattedData;
		}
	}, [initialData]);

	return (
		<section id="education-history" className="education-history container">
			<h4 className="mt-4">Education History</h4>
			{educationHistory.map((item) => (
				<div key={item.id} className="mt-3">
					<button className="btn btn-danger float-right pt-0 pb-0" onClick={(event) => removeEducation(item.id, event)}>
						X
					</button>
					<div className="row">
						<div className="form-group col-md-4">
							<label htmlFor={`school-name-${item.id}`}>School Name {item.id}</label>
							<input
								type="text"
								id={`school-name-${item.id}`}
								name="schoolName"
								value={item.schoolName || ""}
								className="form-control"
								placeholder="University of California, Berkeley, etc..."
								onChange={(e) => handleEducationChange(item.id, "schoolName", e)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`degree-${item.id}`}>Degree</label>
							<input
								type="text"
								id={`degree-${item.id}`}
								name="degree"
								value={item.degree || ""}
								className="form-control"
								placeholder="Bachelors, Masters, etc..."
								onChange={(e) => handleEducationChange(item.id, "degree", e)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`major-${item.id}`}>Major</label>
							<input
								type="text"
								id={`major-${item.id}`}
								name="major"
								value={item.major || ""}
								className="form-control"
								placeholder="Computer Science, Business, etc..."
								onChange={(e) => handleEducationChange(item.id, "major", e)}
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-md-4">
							<label htmlFor={`enrollment-date-${item.id}`}>Enrollment Date</label>
							<input
								type="date"
								id={`enrollment-date-${item.id}`}
								name="enrollmentDate"
								value={item.enrollmentDate || ""}
								className="form-control"
								onChange={(e) => handleEducationChange(item.id, "enrollmentDate", e)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="did-you-graduate">Did you graduate?</label>
							<div className="form-check">
								<input
									type="radio"
									className="form-check-input"
									id={`yes-graduate-${item.id}`}
									name={`graduated-${item.id}`}
									onChange={(e) => handleEducationChange(item.id, "graduated", e)}
									value="yes"
									checked={item.graduated === "yes"}
								/>
								<label className="form-check-label" htmlFor="yes-graduate">
									Yes
								</label>
							</div>
							<div className="form-check">
								<input
									type="radio"
									className="form-check-input"
									id={`no-graduate-${item.id}`}
									name={`graduated-${item.id}`}
									onChange={(e) => handleEducationChange(item.id, "graduated", e)}
									value="no"
									checked={item.graduated === "no"}
								/>
								<label className="form-check-label" htmlFor="no-graduate">
									No
								</label>
							</div>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`graduation-date-${item.id}`}>Graduation Date</label>
							<input
								type="date"
								id={`graduation-date-${item.id}`}
								name="graduationDate"
								value={item.graduationDate || ""}
								className="form-control"
								onChange={(e) => handleEducationChange(item.id, "graduationDate", e)}
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`gpa-${item.id}`}>GPA</label>
							<input
								type="text"
								id={`gpa-${item.id}`}
								name="gpa"
								value={item.gpa || ""}
								className="form-control"
								placeholder="3.5, 4.0, etc..."
								onChange={(e) => handleEducationChange(item.id, "gpa", e)}
							/>
						</div>
					</div>
				</div>
			))}
			<button className="btn btn-primary mt-3" onClick={addEducationHistory}>
				Add Another Education
			</button>
		</section>
	);
});

export default EducationHistory;
