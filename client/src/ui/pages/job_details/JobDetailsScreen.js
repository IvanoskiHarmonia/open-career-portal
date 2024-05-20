import JobDetails from "../../modules/components/card/JobDetails";

function JobDetailsScreen() {
	return (
		<main className="container my-4">
			<div className="row">
				<JobDetails isApplyButtonVisible={true} />
			</div>
		</main>
	);
}

export default JobDetailsScreen;
