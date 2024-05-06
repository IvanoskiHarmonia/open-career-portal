import "./App.css";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import JobDescription from "./components/JobDescription";
import JobFields from "./components/JobFields";

function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<Login />
			<div className="container mt-5 mb-5">
				<JobDescription jobId={100} />
				<JobFields />
			</div>
		</GoogleOAuthProvider>
	);
}

export default App;
