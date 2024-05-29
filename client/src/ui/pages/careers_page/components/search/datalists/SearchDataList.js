import { SearchKeywords } from "../constants/SearchBarData";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SearchDataList = () => {
	const [showAll, setShowAll] = useState(false);
	shuffleArray(SearchKeywords);
	const keywordsToShow = showAll ? SearchKeywords : SearchKeywords.slice(0, 5);

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	return (
		<>
			<datalist id="search-keywords">
				{keywordsToShow.map((keyword, index) => (
					<option key={index} value={keyword} />
				))}
			</datalist>
			<OverlayTrigger placement="bottom" overlay={<Tooltip id="search-tooltip">Reveal {showAll ? "Less" : "More"} search keywords</Tooltip>}>
				<button type="button" className="btn btn-outline-primary" onClick={() => setShowAll(!showAll)}>
					{showAll ? "Show Less" : "Show More"}
				</button>
			</OverlayTrigger>
		</>
	);
};

export default SearchDataList;
