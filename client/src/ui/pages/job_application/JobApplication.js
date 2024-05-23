import "./JobApplication.css";
import JobFields from "./JobFields";
import JobDetails from "../../modules/components/card/JobDetails";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";
import { useState } from "react";

function JobApplication() {
	const [job, setJob] = useState({});

	return (
		<StyleWrapper>
			<JobDetails setJob={setJob} job={job} />
			<JobFields job={job} />
		</StyleWrapper>
	);
}

export default JobApplication;
