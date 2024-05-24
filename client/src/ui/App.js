import "./App.css";
import Login from "./modules/components/logic/Login";
import JobDetailsScreen from "./pages/job_details/JobDetailsScreen";
import JobApplication from "./pages/job_application/JobApplication";
import Careers from "./pages/careers_page/Careers";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./modules/components/utils/ProtectedRoute";
import Navbar from "./modules/components/card/Navbar";
import Candidate from "./pages/candidate/Candidate";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Careers />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/careers/:jobId"
					element={
						<ProtectedRoute>
							<JobDetailsScreen />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/careers/apply/:jobId"
					element={
						<ProtectedRoute>
							<JobApplication />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/user-applications/:userId"
					element={
						<ProtectedRoute>
							<Candidate />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
