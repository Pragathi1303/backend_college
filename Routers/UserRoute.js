const express = require("express");
const router = express.Router();
const { SignupUser } = require("../Controllers/UserController");

router.post("/signup", SignupUser);

module.exports = router;