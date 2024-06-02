const Veteran = () => {
	return (
		<div className="container my-3">
			<p>
				If you believe you belong to any of the categories of protected veterans listed below, please indicate by making the appropriate
				selection. As a government contractor subject to the Vietnam Era Veterans Readjustment Assistance Act (VEVRAA), we request this
				information in order to measure the effectiveness of the outreach and positive recruitment efforts we undertake pursuant to VEVRAA.
				Classification of protected categories is as follows:
			</p>
			<ul className="list-group mb-">
				<li className="list-group-item">
					<strong>Disabled Veteran:</strong> A veteran of the U.S. military, ground, naval, or air service who is entitled to compensation
					(or who but for the receipt of military retired pay would be entitled to compensation) under laws administered by the Secretary of
					Veterans Affairs; or a person who was discharged or released from active duty because of a service-connected disability.
				</li>
				<li className="list-group-item">
					<strong>Recently Separated Veteran:</strong> Any veteran during the three-year period beginning on the date of such veteran's
					discharge or release from active duty in the U.S. military, ground, naval, or air service.
				</li>
				<li className="list-group-item">
					<strong>Active Duty Wartime or Campaign Badge Veteran:</strong> A veteran who served on active duty in the U.S. military, ground,
					naval, or air service during a war, or in a campaign or expedition for which a campaign badge has been authorized under the laws
					administered by the Department of Defense.
				</li>
				<li className="list-group-item">
					<strong>Armed Forces Service Medal Veteran:</strong> A veteran who, while serving on active duty in the U.S. military, ground,
					naval, or air service, participated in a United States military operation for which an Armed Forces service medal was awarded
					pursuant to Executive Order 12985.
				</li>
			</ul>
		</div>
	);
};

export default Veteran;
