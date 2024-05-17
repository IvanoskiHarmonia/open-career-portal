import React from "react";
import { useQuery } from "react-query";

import { getJobs } from "../../../../common/api/getJobs";
import JobCard from "../../../modules/components/card/JobCard";
import "./SidePanel.css";

const SidePanel = () => {
	const {
		data: jobsObject,
		isLoading,
		error,
	} = useQuery("jobs", getJobs, {
		retry: 3,
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
	});

	const jobsArray = jobsObject
		? Object.keys(jobsObject).map((key) => ({
				id: key,
				...jobsObject[key],
		  }))
		: [];

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="link-decoration">
			<h3 className="mt-3">Open Positions</h3>
			{jobsArray.map((job) => (
				<JobCard job={job} key={job.id} />
			))}
		</div>
	);
};

export default SidePanel;
