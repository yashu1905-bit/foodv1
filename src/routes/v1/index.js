const express = require("express")
const router = express.Router();
const authRoute = require("./auth.route")
const userRoute = require("./user.route")
const foodRoute = require("./food.route")

// http://localhost:4001/api/v1/user
router.use("/user", userRoute);
// http://localhost:4001/api/v1/auth
router.use("/auth", authRoute);

// http://localhost:4001/api/v1/food
router.use("/food", foodRoute);

module.exports = router;