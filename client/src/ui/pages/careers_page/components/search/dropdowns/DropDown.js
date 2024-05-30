import React, { useState } from "react";

const DropDown = ({ data, setFilter, dropdownName, dropdownField }) => {
	const [dropdown, setDropdown] = useState(dropdownName);

	data = [dropdownName, ...data];

	return (
		<div className="dropdown me-1">
			<button
				className={`btn btn-outline-primary dropdown-toggle ${dropdown === dropdownName ? "" : "active"}`}
				type="button"
				id="dropdownMenuButton"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{dropdown}
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{data.map((item, index) => (
					<li key={index}>
						<button
							className="dropdown-item"
							onClick={() => {
								if (item === dropdownName) {
									setDropdown(dropdownName);
									setFilter("", dropdownField);
									return;
								} else {
									setFilter(item, dropdownField);
									setDropdown(item);
								}
							}}
						>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDown;
