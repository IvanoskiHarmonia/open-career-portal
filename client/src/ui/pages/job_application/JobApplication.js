import "./JobApplication.css";
import JobFields from "./JobFields";
import JobDetails from "../../modules/components/card/JobDetails";

function JobApplication() {
	return (
		<main className="container my-3">
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
