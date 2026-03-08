const User = require("../models/user.model")
const crudRepository = require("../repositories/crud.repository")


const userRepository = {
    ...crudRepository(User),
    
}

module.exports = userRepository;