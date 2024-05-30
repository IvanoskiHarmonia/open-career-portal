import { Degrees, ExperienceLevels, Locations } from "./constants/DropDownData";
import { getJobByTitleOrDescription } from "../../../../../common/api/getJobs";
import SearchDataList from "./datalists/SearchDataList";
import DropDown from "./dropdowns/DropDown";
import { useState } from "react";

const SearchBar = ({ jobs, setJobs, setMessage }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedFilters, setSelectedFilters] = useState({
		education: "Degree",
		experience_level: "Experience Levels",
		remote: "Remote",
		location: "Location",
	});

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		if (term === "") {
			setJobs([]);
			setMessage("");
			resetFilters();
			return;
		}
		getJobByTitleOrDescription(term)
			.then((data) => {
				setJobs(data);
				setMessage("");
				resetFilters();
			})
			.catch((error) => {
				console.error(error);
				setMessage("No jobs found, here are some other jobs you might be interested in.");
			});
	};

	const handleDropDown = (item, field) => {
		setSelectedFilters((prevFilters) => ({
			...prevFilters,
			[field]: item,
		}));
		if (item === "Degree" || item === "Experience Levels" || item === "Remote" || item === "Location") {
			applyFilters({
				...selectedFilters,
				[field]: "",
			});
		} else {
			applyFilters({
				...selectedFilters,
				[field]: item,
			});
		}
	};

	const resetFilters = () => {
		setSelectedFilters({
			education: "Degree",
			experience_level: "Experience Levels",
			remote: "Remote",
			location: "Location",
		});
	};

	const applyFilters = (filters) => {
		let filteredJobs = jobs;

		if (filters.education && filters.education !== "Degree") {
			filteredJobs = filteredJobs.filter((job) => job.education.includes(filters.education));
		}
		if (filters.experience_level && filters.experience_level !== "Experience Levels") {
			filteredJobs = filteredJobs.filter((job) => job.experience_level.includes(filters.experience_level));
		}
		if (filters.remote && filters.remote !== "Remote") {
			const remote = filters.remote === "Yes" ? true : false;
			filteredJobs = filteredJobs.filter((job) => job.remote === remote);
		}
		if (filters.location && filters.location !== "Location") {
			filteredJobs = filteredJobs.filter((job) => job.location.includes(filters.location));
		}

		if (filteredJobs.length === 0) {
			setMessage("No jobs found, here are some other jobs you might be interested in.");
		} else {
			setMessage("");
		}
		setJobs(filteredJobs);
	};

	return (
		<>
			<div className="input-group mb-2">
				<input
					type="text"
					list="search-keywords"
					className="form-control"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSearch(e);
						}
					}}
					placeholder="Software Developer, Marketing Manager, etc..."
				/>
				<SearchDataList />
			</div>
			<div className="input-group mb-2">
				<DropDown
					data={Degrees}
					setFilter={handleDropDown}
					dropdownName="Degree"
					dropdownField="education"
					selectedValue={selectedFilters.education}
				/>
				<DropDown
					data={ExperienceLevels}
					setFilter={handleDropDown}
					dropdownName="Experience Levels"
					dropdownField="experience_level"
					selectedValue={selectedFilters.experience_level}
				/>
				<DropDown
					data={["Yes", "No"]}
					setFilter={handleDropDown}
					dropdownName="Remote"
					dropdownField="remote"
					selectedValue={selectedFilters.remote}
				/>
				<DropDown
					data={Locations}
					setFilter={handleDropDown}
					dropdownName="Location"
					dropdownField="location"
					selectedValue={selectedFilters.location}
				/>
			</div>
		</>
	);
};

export default SearchBar;
