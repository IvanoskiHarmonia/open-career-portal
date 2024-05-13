import "./JobApplication.css";
import JobFields from "./JobFields";
import JobDetails from "../../modules/components/card/JobDetails";
import { useParams } from "react-router-dom";

function JobApplication() {
	const jobId = useParams();

	return (
		<main className="container mt-3 mb-3">
			<div className="row">
				<JobDetails />
			</div>
			<div className="row">
				<JobFields />
			</div>
		</main>
	);
}

export default JobApplication;
