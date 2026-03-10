const signUpController = require("../../controllers/auth.controller")
const express = require("express")
const router = express.Router();

// http://localhost:4001/api/v1/auth/signup
router.post("/signup", signUpController);

module.exports = router;