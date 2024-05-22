import JobDetails from "../../modules/components/card/JobDetails";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";

function JobDetailsScreen() {
	return (
		<StyleWrapper>
			<JobDetails isApplyButtonVisible={true} />
		</StyleWrapper>
	);
}

export default JobDetailsScreen;
