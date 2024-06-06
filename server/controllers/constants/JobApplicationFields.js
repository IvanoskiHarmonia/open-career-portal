const fields = (req) => {
	const JobApplicationFields = {
		userId: req.body.userId,
		status: "Pending",
		jobId: req.body.jobId,
		jobTitle: req.body.jobTitle,
		resume: req.files["resume"]
			? {
					data: req.files["resume"][0].buffer,
					contentType: req.files["resume"][0].mimetype,
			  }
			: null,
		coverLetter: req.files["coverLetter"]
			? {
					data: req.files["coverLetter"][0].buffer,
					contentType: req.files["coverLetter"][0].mimetype,
			  }
			: null,
		personalFirstName: req.body.personalFirstName,
		personalMiddleInitial: req.body.personalMiddleInitial,
		personalLastName: req.body.personalLastName,
		personalEmail: req.body.personalEmail,
		personalPhoneNumber: req.body.personalPhoneNumber,
		personalAddress1: req.body.personalAddress1,
		personalAddress2: req.body.personalAddress2,
		personalCity: req.body.personalCity,
		personalState: req.body.personalState,
		personalZipCode: req.body.personalZipCode,
		personalCountry: req.body.personalCountry,
		usWorkEligibility: req.body.usWorkEligibility,
		relocate: req.body.relocate,
		felony: req.body.felony,
		backgroundCheck: req.body.backgroundCheck,
		drugTest: req.body.drugTest,
		overtime: req.body.overtime,
		weekends: req.body.weekends,
		travel: req.body.travel,
		remote: req.body.remote,
		jobExperience: JSON.parse(req.body.jobExperience),
		educationHistory: JSON.parse(req.body.educationHistory),
		references: JSON.parse(req.body.references),
		listOfSkills: req.body.listOfSkills,
		listOfCertifications: req.body.listOfCertifications,
		gender: req.body.gender,
		raceEthnicity: req.body.raceEthnicity,
		disability: req.body.disability,
		veteran: req.body.veteran,
		signatureName: req.body.signatureName,
		employeeId: req.body.employeeId,
		signatureDate: req.body.signatureDate,
		createdAt: req.body.createdAt,
	};

	return JobApplicationFields;
};

module.exports = fields;
