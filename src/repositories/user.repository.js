const User = require("../models/user.model")
const crudRepository = require("../repositories/crud.repository")


const userRepository = {
    ...crudRepository(User),
    
    findByEmail: async (email) => {
        try {
            const user = await User.findOne({ email: email })
            return user;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = userRepository;