import Spinner from "react-bootstrap/Spinner";
import "./SpinnerOverlay.css";

const SpinnerOverlay = () => {
	return (
		<div className="overlay">
			<Spinner animation="grow" variant="primary" />
		</div>
	);
};

export default SpinnerOverlay;
