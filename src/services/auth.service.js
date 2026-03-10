const userRepository = require("../repositories/user.repository")

const signUpService = async (data) => {
    try {
        const user = await userRepository.createDocument(data);
        return user;
    } catch (error) {
        throw error;
    }
}


module.exports = signUpService;