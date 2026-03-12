const FoodRepository = require("../repositories/food.repository")

const createFoodService = async (data) => { 
   try{
    const food = await FoodRepository.createDocument(data);
    return food;    
   }
    catch (error) { 
        throw error;
    }
}

module.exports = {
    createFoodService
}