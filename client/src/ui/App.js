import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./modules/components/logic/Login";
import JobApplication from "./pages/job_application/JobApplication";
import Careers from "./pages/careers_page/Careers";

function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<Careers />
			{/* <Login />
			<JobApplication jobID={100} /> */}
		</GoogleOAuthProvider>
	);
}

export default App;
