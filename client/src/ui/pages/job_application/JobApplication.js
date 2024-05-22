import "./JobApplication.css";
import JobFields from "./JobFields";
import JobDetails from "../../modules/components/card/JobDetails";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";

function JobApplication() {
	return (
		<StyleWrapper>
			<JobDetails />
			<JobFields />
		</StyleWrapper>
	);
}

export default JobApplication;
