import React from "react";
import { Nav } from "react-bootstrap";
import { FileText } from "react-feather";

const ScrollSpyNav = () => {
	return (
		<Nav className="flex-column sticky-top" id="scroll-spy-job-application">
			<button
				className="btn btn-primary shadow-sm mb-2"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasJobDescription"
				aria-controls="offcanvasJobDescription"
			>
				Job Description <FileText size={20} />
			</button>
			<Nav.Link href="#resume-coverletter">
				Resume/Cover Letter <span className="badge bg-danger">2</span>
			</Nav.Link>
			<Nav.Link href="#contact-info">
				Contact Info <span className="badge bg-danger">9</span>
			</Nav.Link>
			<Nav.Link href="#work-eligibility">
				Work Eligibility <span className="badge bg-danger">9</span>
			</Nav.Link>
			<Nav.Link href="#employment-history">
				Employment History <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#education-history">
				Education History <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#job-skills">
				Job Skills <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#references">
				References <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#information-truthfulness">
				Information Truthfulness <span className="badge bg-danger">1</span>
			</Nav.Link>
			<Nav.Link href="#self-identification">
				Self Identification <span className="badge bg-danger">4</span>
			</Nav.Link>
			<Nav.Link href="#signature">
				Signature <span className="badge bg-danger">3</span>
			</Nav.Link>
		</Nav>
	);
};

export default ScrollSpyNav;
