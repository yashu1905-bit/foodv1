const {createFoodController,getAllFoodsController,getSingleFoodController,updateFoodController,deleteFoodController}=require("../../controllers/food.controller");

const express = require("express")
const router = express.Router();
const IsAuthenticated = require("../../middlewares/auth.middleware");


// http://localhost:4001/api/v1/food
router.post("/", IsAuthenticated, createFoodController);

// http://localhost:4001/api/v1/food
router.get("/", IsAuthenticated, getAllFoodsController);

// http://localhost:4001/api/v1/food/:id
router.get("/:id", IsAuthenticated, getSingleFoodController);

// // http://localhost:4001/api/v1/food/:id
// router.put("/:id", IsAuthenticated, updateFoodController);

// http://localhost:4001/api/v1/food/:id
router.patch("/:id", IsAuthenticated, updateFoodController);

// http://localhost:4001/api/v1/food/:id
router.delete("/:id", IsAuthenticated, deleteFoodController);



module.exports = router;
