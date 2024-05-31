import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import shuffleArray from "../../../../../../common/utils/shuffleArray";

const DropDown = ({ data, setFilter, dropdownName, dropdownField, selectedValue }) => {
	const handleSelect = (eventKey) => {
		if (eventKey === dropdownName) {
			setFilter("", dropdownField);
		} else {
			setFilter(eventKey, dropdownField);
		}
	};

	if (!data) {
		return null;
	} else if (data.length > 10) {
		data = data.slice(0, 10);
		shuffleArray(data);
	}

	return (
		<DropdownButton
			id={`dropdown-${dropdownField}`}
			title={selectedValue || dropdownName}
			onSelect={handleSelect}
			className={`btn-outline-primary me-1 ${selectedValue === "" || selectedValue === dropdownName ? "" : "active"}`}
			variant={selectedValue === "" || selectedValue === dropdownName ? "outline-primary" : "primary"}
		>
			{[dropdownName, ...data].map((item, index) => (
				<Dropdown.Item key={index} eventKey={item}>
					{item}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default DropDown;
