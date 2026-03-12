
const {createFoodService}=require("../services/food.service")

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

module.exports={
    createFoodController
}