const express = require("express")
const router = express.Router();
const authRoute = require("./auth.route")

// http://localhost:4001/api/v1/auth
router.use("/auth", authRoute);

module.exports = router;