import React, { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import Required from "../../small_blocks/Required";

const EducationHistory = forwardRef(({ initialData = [] }, ref) => {
	const [educationHistory, setEducationHistory] = useState([]);
	const initialDataRef = useRef(initialData);

	const addEducationHistory = (event) => {
		event.preventDefault();
		const newId = educationHistory.length > 0 ? educationHistory[educationHistory.length - 1].id + 1 : 1;
		setEducationHistory([
			...educationHistory,
			{
				id: newId,
				schoolName: "",
				schoolDegree: "",
				schoolMajor: "",
				schoolEnrollmentDate: "",
				schoolGraduationDate: "",
				schoolGraduated: "",
				schoolGPA: "",
			},
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
			schoolEnrollmentDate: item.schoolEnrollmentDate ? item.schoolEnrollmentDate.split("T")[0] : "",
			schoolGraduationDate: item.schoolGraduationDate ? item.schoolGraduationDate.split("T")[0] : "",
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
							<label htmlFor={`schoolName-${item.id}`}>School Name {item.id}</label>
							<Required />
							<input
								type="text"
								id={`schoolName-${item.id}`}
								name="schoolName"
								value={item.schoolName || ""}
								className="form-control"
								placeholder="University of California, Berkeley, etc..."
								onChange={(e) => handleEducationChange(item.id, "schoolName", e)}
								required
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`schoolDegree-${item.id}`}>Degree</label>
							<Required />
							<input
								type="text"
								id={`schoolDegree-${item.id}`}
								name="schoolDegree"
								value={item.schoolDegree || ""}
								className="form-control"
								placeholder="Bachelors, Masters, etc..."
								onChange={(e) => handleEducationChange(item.id, "schoolDegree", e)}
								required
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`schoolMajor-${item.id}`}>Major</label>
							<Required />
							<input
								type="text"
								id={`schoolMajor-${item.id}`}
								name="schoolMajor"
								value={item.schoolMajor || ""}
								className="form-control"
								placeholder="Computer Science, Business, etc..."
								onChange={(e) => handleEducationChange(item.id, "schoolMajor", e)}
								required
							/>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-md-4">
							<label htmlFor={`schoolEnrollmentDate-${item.id}`}>Enrollment Date</label>
							<Required />
							<input
								type="date"
								id={`schoolEnrollmentDate-${item.id}`}
								name="schoolEnrollmentDate"
								value={item.schoolEnrollmentDate || ""}
								className="form-control"
								onChange={(e) => handleEducationChange(item.id, "schoolEnrollmentDate", e)}
								required
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor="did-you-graduate">Did you graduate?</label>
							<Required />
							<div className="form-check">
								<input
									type="radio"
									className="form-check-input"
									id={`yes-schoolGraduated-${item.id}`}
									name={`schoolGraduated-${item.id}`}
									onChange={(e) => handleEducationChange(item.id, "schoolGraduated", e)}
									value="yes"
									checked={item.schoolGraduated === "yes"}
									aria-label={`yes-schoolGraduated-${item.id}`}
									required
								/>
								<label className="form-check-label" htmlFor="yes-schoolGraduated">
									Yes
								</label>
							</div>
							<div className="form-check">
								<input
									type="radio"
									className="form-check-input"
									id={`no-schoolGraduated-${item.id}`}
									name={`schoolGraduated-${item.id}`}
									onChange={(e) => handleEducationChange(item.id, "schoolGraduated", e)}
									value="no"
									checked={item.schoolGraduated === "no"}
									aria-label={`no-schoolGraduated-${item.id}`}
								/>
								<label className="form-check-label" htmlFor="no-schoolGraduated">
									No
								</label>
							</div>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`schoolGraduationDate-${item.id}`}>Graduation Date</label>
							<Required />
							<input
								type="date"
								id={`schoolGraduationDate-${item.id}`}
								name="schoolGraduationDate"
								value={item.schoolGraduationDate || ""}
								className="form-control"
								onChange={(e) => handleEducationChange(item.id, "schoolGraduationDate", e)}
								required
							/>
						</div>
						<div className="form-group col-md-4">
							<label htmlFor={`schoolGPA-${item.id}`}>GPA</label>
							<Required />
							<input
								type="text"
								id={`schoolGPA-${item.id}`}
								name="schoolGPA"
								value={item.schoolGPA || ""}
								className="form-control"
								placeholder="3.5, 4.0, etc..."
								onChange={(e) => handleEducationChange(item.id, "schoolGPA", e)}
								required
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
