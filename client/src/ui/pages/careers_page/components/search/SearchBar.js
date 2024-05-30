import { Degrees, ExperienceLevels, Locations } from "./constants/DropDownData";
import { getJobByTitleOrDescription } from "../../../../../common/api/getJobs";
import SearchDataList from "./datalists/SearchDataList";
import DropDown from "./dropdowns/DropDown";
import { useState } from "react";

const SearchBar = ({ jobs, setJobs, setMessage }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedFilters, setSelectedFilters] = useState({
		education: "",
		experience_level: "",
		remote: "",
		location: "",
	});

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		if (term === "") {
			setJobs([]);
			setMessage("");
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
		applyFilters({ ...selectedFilters, [field]: item });
	};

	const resetFilters = () => {
		setSelectedFilters({
			education: "",
			experience_level: "",
			remote: false,
			location: "",
		});
	};

	const applyFilters = (filters) => {
		let filteredJobs = jobs;

		if (filters.education) {
			filteredJobs = filteredJobs.filter((job) => job.education.includes(filters.education));
		}
		if (filters.experience_level) {
			filteredJobs = filteredJobs.filter((job) => job.experience_level.includes(filters.experience_level));
		}
		if (filters.remote) {
			const remote = filters.remote === "Yes" ? true : false;
			filteredJobs = filteredJobs.filter((job) => job.remote === remote);
		}
		if (filters.location) {
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
				<DropDown data={Degrees} setFilter={handleDropDown} dropdownName={"Degree"} dropdownField={"education"} />
				<DropDown data={ExperienceLevels} setFilter={handleDropDown} dropdownName="Experience Levels" dropdownField={"experience_level"} />
				<DropDown data={["Yes", "No"]} setFilter={handleDropDown} dropdownName={"Remote"} dropdownField={"remote"} />
				<DropDown data={Locations} setFilter={handleDropDown} dropdownName={"Location"} dropdownField={"location"} />
			</div>
		</>
	);
};

export default SearchBar;
