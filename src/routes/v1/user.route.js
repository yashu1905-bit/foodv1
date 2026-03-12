const express = require("express")
const router = express.Router();
const { ProfileController } = require("../../controllers/user.controller")
const IsAuthenticated = require("../../middlewares/auth.middleware");


// http://localhost:4001/api/v1/user/profile
router.get("/profile", IsAuthenticated, ProfileController);

module.exports = router;

