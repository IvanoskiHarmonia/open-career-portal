import { useState } from "react";
import JobDetails from "../../modules/components/card/JobDetails/JobDetails";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";

function JobDetailsScreen() {
	const [job, setJob] = useState({});

	return (
		<StyleWrapper>
			<JobDetails job={job} setJob={setJob} detailsScreen={true} />
		</StyleWrapper>
	);
}

export default JobDetailsScreen;
