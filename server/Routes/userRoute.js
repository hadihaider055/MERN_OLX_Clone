const express = require("express");
const { phoneNumberVerifier } = require("../Controllers/userController");
const router = express.Router();

router.route("/phoneNumberVerifier").post(phoneNumberVerifier);

module.exports = router;
