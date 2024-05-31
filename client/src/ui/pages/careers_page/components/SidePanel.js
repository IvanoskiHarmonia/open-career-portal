import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { getJobs } from "../../../../common/api/getJobs";
import JobCard from "../../../modules/components/card/JobCard";
import "./SidePanel.css";

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
		const jobsArray = jobsObject
			? Object.keys(jobsObject).map((key) => ({
					id: key,
					...jobsObject[key],
			  }))
			: [];

		if (jobs.length === 0) {
			setJobs(jobsArray);
		}
	}, [jobs, jobsObject, setJobs]);

	if (isLoading) return <div>Loading...</div>;
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
