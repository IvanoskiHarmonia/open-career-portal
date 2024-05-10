import "./JobApplication.css";
import JobFields from "./JobFields";
import JobDetails from "../../modules/components/card/JobDetails";

function JobApplication({ jobID }) {
	return (
		<main className="mt-3 mb-3">
			<JobDetails jobId={jobID} />
			<JobFields />
		</main>
	);
}

export default JobApplication;
