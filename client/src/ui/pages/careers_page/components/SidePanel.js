import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { getJobs } from "../../../../common/api/getJobs";
import JobCard from "../../../modules/components/card/JobCard/JobCard";
import "./SidePanel.css";
import JobCardPlaceholder from "../../../modules/components/card/JobCard/JobCardPlaceholder";

const SidePanel = ({ jobs, setJobs, message }) => {
	const {
		data: jobsObject,
		isLoading,
		error,
	} = useQuery("jobs", getJobs, {
		retry: 3,
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
	});

	useEffect(() => {
		if (jobsObject && jobs.length === 0) {
			const jobsArray = Object.keys(jobsObject).map((key) => ({
				id: key,
				...jobsObject[key],
			}));
			setJobs(jobsArray);
		}
	}, [jobsObject, jobs.length, setJobs]);

	if (isLoading) {
		return (
			<div>
				<JobCardPlaceholder />
				<JobCardPlaceholder />
				<JobCardPlaceholder />
			</div>
		);
	}
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="col-lg-10 offset-lg-1">
			<h3 className="">Open Positions</h3>
			{message && (
				<div>
					<div className="border border-info border-2 rounded mb-5">
						<p className="text-center my-5 fs-2">{message}</p>
					</div>
					<hr />
				</div>
			)}
			{jobs.map((job) => (
				<JobCard job={job} key={job.id} />
			))}
		</div>
	);
};

export default SidePanel;
