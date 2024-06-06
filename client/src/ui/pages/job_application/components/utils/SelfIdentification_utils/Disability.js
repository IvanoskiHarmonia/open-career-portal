import React from "react";

const Disability = () => {
	return (
		<div className="container my-4">
			<p>Form CC-305 Page 1 of 1 OMB Control Number 1250-0005 Expires 04/30/2026</p>
			<p>
				<strong>Why are you being asked to complete this form?</strong>
			</p>
			<p>
				We are a federal contractor or subcontractor. The law requires us to provide equal employment opportunity to qualified people with
				disabilities. We have a goal of having at least [percentage]% of our workers as people with disabilities. The law says we must measure
				our progress towards this goal. To do this, we must ask applicants and employees if they have a disability or have ever had one.
				People can become disabled, so we need to ask this question at least every five years. Completing this form is voluntary, and we hope
				that you will choose to do so. Your answer is confidential. No one who makes hiring decisions will see it. Your decision to complete
				the form and your answer will not harm you in any way. If you want to learn more about the law or this form, visit the U.S. Department
				of Labor’s Office of Federal Contract Compliance Programs (OFCCP) website at{" "}
				<a href="http://www.dol.gov/ofccp" target="_blank" rel="noreferrer noopener">
					www.dol.gov/ofccp
				</a>
				.
			</p>
			<p>
				<strong>How do you know if you have a disability?</strong>
			</p>
			<p>
				A disability is a condition that substantially limits one or more of your “major life activities.” If you have or have ever had such a
				condition, you are a person with a disability. <strong>Disabilities include, but are not limited to</strong>:
			</p>
			<ul className="list-group mb-4">
				<li className="list-group-item">Alcohol or other substance use disorder (not currently using drugs illegally)</li>
				<li className="list-group-item">Autoimmune disorder, for example, lupus, fibromyalgia, rheumatoid arthritis, HIV/AIDS</li>
				<li className="list-group-item">Blind or low vision</li>
				<li className="list-group-item">Cancer (past or present)</li>
				<li className="list-group-item">Cardiovascular or heart disease</li>
				<li className="list-group-item">Celiac disease</li>
				<li className="list-group-item">Cerebral palsy</li>
				<li className="list-group-item">Deaf or serious difficulty hearing</li>
				<li className="list-group-item">Diabetes</li>
				<li className="list-group-item">
					Disfigurement, for example, disfigurement caused by burns, wounds, accidents, or congenital disorders
				</li>
				<li className="list-group-item">Epilepsy or other seizure disorder</li>
				<li className="list-group-item">Gastrointestinal disorders, for example, Crohn's Disease, irritable bowel syndrome</li>
				<li className="list-group-item">Intellectual or developmental disability</li>
				<li className="list-group-item">
					Mental health conditions, for example, depression, bipolar disorder, anxiety disorder, schizophrenia, PTSD
				</li>
				<li className="list-group-item">Missing limbs or partially missing limbs</li>
				<li className="list-group-item">
					Mobility impairment, benefiting from the use of a wheelchair, scooter, walker, leg brace(s) and/or other supports
				</li>
				<li className="list-group-item">
					Nervous system condition, for example, migraine headaches, Parkinson’s disease, multiple sclerosis (MS)
				</li>
				<li className="list-group-item">
					Neurodivergence, for example, attention-deficit/hyperactivity disorder (ADHD), autism spectrum disorder, dyslexia, dyspraxia,
					other learning disabilities
				</li>
				<li className="list-group-item">Partial or complete paralysis (any cause)</li>
				<li className="list-group-item">Pulmonary or respiratory conditions, for example, tuberculosis, asthma, emphysema</li>
				<li className="list-group-item">Short stature (dwarfism)</li>
				<li className="list-group-item">Traumatic brain injury</li>
			</ul>
		</div>
	);
};

export default Disability;
