import React from "react";

const StyleWrapper = ({ children, containerClassName = "", rowClassName = "" }) => {
	return (
		<main className={`container my-4 ${containerClassName}`}>
			{React.Children.map(children, (child, index) => (
				<div className={`row ${rowClassName}`} key={index}>
					{child}
				</div>
			))}
		</main>
	);
};

export default StyleWrapper;
