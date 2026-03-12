const {createFoodController}=require("../../controllers/food.controller");

const express = require("express")
const router = express.Router();
const IsAuthenticated = require("../../middlewares/auth.middleware");


// http://localhost:4001/api/v1/food
router.post("/", IsAuthenticated, createFoodController);

module.exports = router;
