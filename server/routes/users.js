const express = require("express");
const router = express.Router();
const { login } = require("../controllers/usersController");

router.post("/login", login);

module.exports = router;
