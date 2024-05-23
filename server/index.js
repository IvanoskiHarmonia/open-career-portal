const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();

const cors = require("./middleware/corsMiddleware");
const connectDB = require("./utils/db");

connectDB();

const PORT = process.env.PORT || 8000;

app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
});

app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/user-applications", require("./routes/jobApplications"));
app.use("/api/session", require("./routes/session"));
app.use("/api/users", require("./routes/users"));

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
