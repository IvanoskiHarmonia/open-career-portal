import "./JobApplication.css";
import JobFields from "./components/JobFields";
import JobDetails from "../../modules/components/card/JobDetails/JobDetails";
import OffCanvas from "./small_blocks/OffCanvas";
import StyleWrapper from "../../modules/components/wrappers/StyleWrapper";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../common/hooks/useAuth";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function JobApplication() {
	const [job, setJob] = useState({});
	const { jobId } = useParams();
	const { userId } = useAuth();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const [hasApplied, setHasApplied] = useState(false);

	useEffect(() => {
		const checlIfUserApplied = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/user-applications/check-application/" + userId + "/" + jobId);
				if (response.status === 200) {
					setHasApplied(true);
				} else {
					console.error("Failed to check if user applied:", response.data);
				}
			} catch (error) {
				console.error("Failed to check if user applied:", error.response ? error.response.data : error.message);
			} finally {
				setLoading(false);
			}
		};

		checlIfUserApplied();
	}, [userId, jobId]);

	if (loading) {
		return (
			<div className="overlay">
				<Spinner animation="grow" variant="primary" />
			</div>
		);
	}

	if (hasApplied) {
		navigate("/careers/" + jobId);
	}

	return (
		<StyleWrapper>
			<JobDetails setJob={setJob} job={job} />
			<JobFields job={job} />
			<OffCanvas children={<JobDetails setJob={setJob} job={job} />} />
		</StyleWrapper>
	);
}

export default JobApplication;
