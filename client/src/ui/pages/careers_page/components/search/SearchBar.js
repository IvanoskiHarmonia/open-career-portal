import { Degrees, ExperienceLevels, Locations } from "./constants/DropDownData";
import SearchDataList from "./datalists/SearchDataList";
import DropDown from "./dropdowns/DropDown";

const SearchBar = () => {
	return (
		<>
			<div className="input-group mb-2">
				<input type="text" list="search-keywords" className="form-control" placeholder="Software Developer, Marketing Manager, etc..." />
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
