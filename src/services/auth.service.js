const userRepository = require("../repositories/user.repository")

const signUpService = async (data) => {
    try {
        const user = await userRepository.createDocument(data);
        return user;
    } catch (error) {
        throw error;
    }
}

const loginService = async (data) => { 
    try{
        const user = await userRepository.findByEmail( data.email);
        if (!user) {
            throw new Error("User not found");
            
        }           
        return user;
    }
    catch (error) {
        throw error;
    }
  }

module.exports = {
    signUpService,
    loginService
};