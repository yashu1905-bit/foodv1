const signUpService = require("../services/auth.service")


const signUpController = async (req, res) => {
    try {
        const user = await signUpService(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        })

    } catch (error) {
        console.log(error);
    }

}


module.exports = signUpController;