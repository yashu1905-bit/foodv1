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

const getAllFoodsService = async () => {
    try {
        const food = await FoodRepository.readDocuments();
        return food;
    } catch (error) {
        throw error;
    }
}

const getSingleFoodService = async (id) => {
    try {
        const food = await FoodRepository.readDocument(id); 
        return food;
    } catch (error) {
        throw error;
    }
}

const updateFoodService = async (id, data) => {
    try {
        const food = await FoodRepository.updateDocument(id, data); 
        return food;
    } catch (error) {
        throw error;
    }  
}

const deleteFoodService = async (id) => {
    try {
        const food = await FoodRepository.deleteDocument(id);
        return food;
    } catch (error) {
        throw error;
    }
}   


module.exports = {
    createFoodService,
    getAllFoodsService,
    getSingleFoodService,
    updateFoodService,
    deleteFoodService
}