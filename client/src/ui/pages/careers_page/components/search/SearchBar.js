import { Degrees, ExperienceLevels, Locations } from "./constants/DropDownData";
import { getJobByTitleOrDescription } from "../../../../../common/api/getJobs";
import SearchDataList from "./datalists/SearchDataList";
import DropDown from "./dropdowns/DropDown";

const SearchBar = ({ setJobs }) => {
	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		if (searchTerm === "") {
			setJobs([]);
			return;
		}
		getJobByTitleOrDescription(searchTerm)
			.then((data) => {
				setJobs([data.job]);
			})
			.catch((error) => {
				console.error(error);
			});
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
				<DropDown data={Degrees} dropdownName={"Degree"} />
				<DropDown data={ExperienceLevels} dropdownName="Experience Levels" />
				<DropDown data={Locations} dropdownName={"Location"} />
			</div>
		</>
	);
};

export default SearchBar;
