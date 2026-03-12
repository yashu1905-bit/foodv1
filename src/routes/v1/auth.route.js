const { signUpController, loginController } = require("../../controllers/auth.controller")
const express = require("express")
const router = express.Router();
const { ValidateSignupRequest, ValidateLoginRequest } = require("../../validators")
// http://localhost:4001/api/v1/auth/signup
router.post("/signup", ValidateSignupRequest, signUpController);

// http://localhost:4001/api/v1/auth/login
router.post("/login", ValidateLoginRequest, loginController);


module.exports = router;