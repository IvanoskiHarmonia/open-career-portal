import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { FileText } from "react-feather";

const ScrollSpyNav = () => {
	const [activeSection, setActiveSection] = useState("resume-coverletter");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "0px 0px -50% 0px" }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

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
			<Nav.Link href="#resume-coverletter" active={activeSection === "resume-coverletter"}>
				Resume/Cover Letter <span className="badge bg-danger">2</span>
			</Nav.Link>
			<Nav.Link href="#contact-info" active={activeSection === "contact-info"}>
				Contact Info <span className="badge bg-danger">9</span>
			</Nav.Link>
			<Nav.Link href="#work-eligibility" active={activeSection === "work-eligibility"}>
				Work Eligibility <span className="badge bg-danger">9</span>
			</Nav.Link>
			<Nav.Link href="#employment-history" active={activeSection === "employment-history"}>
				Employment History <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#education-history" active={activeSection === "education-history"}>
				Education History <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#job-skills" active={activeSection === "job-skills"}>
				Job Skills <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#references" active={activeSection === "references"}>
				References <span className="badge bg-danger">0</span>
			</Nav.Link>
			<Nav.Link href="#information-truthfulness" active={activeSection === "information-truthfulness"}>
				Information Truthfulness <span className="badge bg-danger">1</span>
			</Nav.Link>
			<Nav.Link href="#self-identification" active={activeSection === "self-identification"}>
				Self Identification <span className="badge bg-danger">4</span>
			</Nav.Link>
			<Nav.Link href="#signature" active={activeSection === "signature"}>
				Signature <span className="badge bg-danger">3</span>
			</Nav.Link>
		</Nav>
	);
};

export default ScrollSpyNav;
