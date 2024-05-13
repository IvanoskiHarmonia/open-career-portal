import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./modules/components/logic/Login";
import JobApplication from "./pages/job_application/JobApplication";
import Careers from "./pages/careers_page/Careers";
import { Route, Routes } from "react-router-dom";
import JobDetails from "./modules/components/card/JobDetails";

function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/careers/*" element={<Careers />} />
				<Route path="/careers/:jobId" element={<JobDetails isApplyButtonVisible={true} />} />
				<Route path="/careers/apply/:jobId" element={<JobApplication />} />
			</Routes>
		</GoogleOAuthProvider>
	);
}

export default App;
