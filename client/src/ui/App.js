import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./modules/components/logic/Login";
import JobDetailsScreen from "./pages/job_details/JobDetailsScreen";
import JobApplication from "./pages/job_application/JobApplication";
import Careers from "./pages/careers_page/Careers";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../common/hooks/useAuth";
import ProtectedRoute from "./modules/components/utils/ProtectedRoute";
import Navbar from "./modules/components/card/Navbar";

function App() {
	return (
		<GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
			<AuthProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/careers/"
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
				</Routes>
			</AuthProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
