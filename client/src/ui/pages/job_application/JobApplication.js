import JobFields from "./JobFields";
import JobDescription from "./small_blocks/JobDescription";

function JobApplication({ jobID }) {
	return (
		<main className="mt-3 mb-3">
			<JobDescription jobId={jobID} />
			<JobFields />
		</main>
	);
}

export default JobApplication;
