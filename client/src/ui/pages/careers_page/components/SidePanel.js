import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { getJobs } from "../../../../common/api/getJobs";
import JobCard from "../../../modules/components/card/JobCard";

const SidePanel = () => {
	const {
		data: jobsObject,
		isLoading,
		error,
	} = useQuery("jobs", getJobs, {
		retry: 3, // Retries failed requests up to 3 times
		retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // Exponential backoff up to 30 seconds
	});

	// If data is not already an array, convert it
	const jobsArray = jobsObject
		? Object.keys(jobsObject).map((key) => ({
				id: key,
				...jobsObject[key],
		  }))
		: [];

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="col-md-4">
			<h3>Open Positions</h3>
			{jobsArray.map((job) => (
				<Link to={`/careers/${job.id}`} key={job.id}>
					<JobCard job={job} />
				</Link>
			))}
		</div>
	);
};

export default SidePanel;
