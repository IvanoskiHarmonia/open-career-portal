import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const UserJobApplicationsPlaceholder = () => {
	return (
		<Placeholder as="div" animation="glow" className="col-lg-10 offset-lg-1" aria-hidden="true">
			<h3>Your Job Applications</h3>
			<Tabs id="applications-tabs" activeKey="active" className="mb-3">
				<Tab eventKey="active" title="Active Applications">
					<ul className="list-group">
						{[1, 2, 3, 4].map((application) => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={application}>
								<Placeholder as="div" animation="glow" className="col-4">
									<Placeholder xs={12} /> <Placeholder xs={6} />
								</Placeholder>
								<Placeholder xs={1} bg="success" className="rounded" />
							</li>
						))}
					</ul>
				</Tab>
				<Tab eventKey="inactive" title="Inactive Applications">
					<ul className="list-group">
						{[1, 2, 3, 4].map((application) => (
							<li className="list-group-item d-flex justify-content-between align-items-center" key={application}>
								<div>
									<strong>Job Title</strong> at Company Name
									<br />
									Applied on: Date
								</div>
								<span className="badge text-bg-danger rounded">Status</span>
							</li>
						))}
					</ul>
				</Tab>
			</Tabs>
		</Placeholder>
	);
};

export default UserJobApplicationsPlaceholder;
