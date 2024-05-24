const express = require("express");
const router = express.Router();
const { validateSession, logout } = require("../controllers/sessionController");

router.get("/validate", validateSession);
router.post("/logout", logout);

module.exports = router;
