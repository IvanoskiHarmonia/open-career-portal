import { Code, GitHub, Linkedin } from "react-feather";
import "./Footer.css";

export default function Footer() {
	return (
		<footer className="footer navbar-fixed-bottom">
			<div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<span className="mb-3 mb-md-0 text-body-secondary">© 2024 OpenCareerPortal</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3">
						<a
							className="text-body-secondary"
							href="https://www.linkedin.com/in/martin-ivanoski-385843195/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin />
						</a>
					</li>
					<li className="ms-3">
						<a className="text-body-secondary" href="https://github.com/IvanoskiHarmonia" target="_blank" rel="noopener noreferrer">
							<GitHub />
						</a>
					</li>
					<li className="ms-3">
						<a
							className="text-body-secondary"
							href="https://github.com/IvanoskiHarmonia/open-career-portal"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Code />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
