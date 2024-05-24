import React from "react";

const OffCanvas = ({ children }) => {
	return (
		<div
			className="offcanvas offcanvas-start"
			data-bs-scroll="true"
			data-bs-backdrop="false" // Optional: if you want to allow interaction with the backdrop
			tabIndex="-1"
			id="offcanvasJobDescription"
			aria-labelledby="offcanvasJobDescriptionLabel"
		>
			<div className="offcanvas-header">
				<h5 className="offcanvas-title" id="offcanvasJobDescriptionLabel">
					Offcanvas
				</h5>
				<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div className="offcanvas-body">{children}</div>
		</div>
	);
};

export default OffCanvas;
