
const {createFoodService,getAllFoodsService,getSingleFoodService,updateFoodService,deleteFoodService}=require("../services/food.service")

const createFoodController=async(req,res)=>{
    try {
        const food=await createFoodService(req.body);
        res.status(200).json({
            success:true,
            message:"Food created successfully",
            data:food
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false, 
            message:"Food creation failed",
            error:error.message
        })
    }
}

const getAllFoodsController=async(req,res)=>{
    try {
        const food=await getAllFoodsService();
        res.status(200).json({
            success:true,
            message:"Foods retrieved successfully",
            data:food
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to retrieve foods",
            error:error.message
        })
    }
}

const getSingleFoodController=async(req,res)=>{
    try {
        const food=await getSingleFoodService(req.params.id);   
        res.status(200).json({
            success:true,
            message:"Food retrieved successfully",
            data:food
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to retrieve food",
            error:error.message
        })
    }
}

const updateFoodController=async(req,res)=>{
    try {
        const food=await updateFoodService(req.params.id, req.body);  
        res.status(200).json({
            success:true,
            message:"Food updated successfully",
            data:food
        })
    }   catch (error) {
        console.log(error); 
    }
}

const deleteFoodController=async(req,res)=>{
    try {
        const food=await deleteFoodService(req.params.id);
        res.status(200).json({
            success:true,
            message:"Food deleted successfully",
            data:food
        })
    }   catch (error) {
        console.log(error);
    }   
}


module.exports={
    createFoodController,
    getAllFoodsController,
    getSingleFoodController,
    updateFoodController,
    deleteFoodController
}