const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();

const cors = require("./middleware/corsMiddleware");
const connectDB = require("./utils/db");

connectDB();

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

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
