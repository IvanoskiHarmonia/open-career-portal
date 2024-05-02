const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/api/test", (req, res) => {
	res.send("Hello from the server!");
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
