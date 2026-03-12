const Food = require("../models/food.model")
const crudRepository = require("./crud.repository")

const FoodRepository = {
    ...crudRepository(Food)
}
module.exports = FoodRepository;