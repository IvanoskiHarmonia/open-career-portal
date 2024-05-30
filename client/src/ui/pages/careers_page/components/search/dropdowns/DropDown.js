import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const DropDown = ({ data, setFilter, dropdownName, dropdownField, selectedValue }) => {
	const handleSelect = (eventKey) => {
		if (eventKey === dropdownName) {
			setFilter("", dropdownField);
		} else {
			setFilter(eventKey, dropdownField);
		}
	};

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
