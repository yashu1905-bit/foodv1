const { signUpService, loginService } = require("../services/auth.service")
const jwt = require("jsonwebtoken")


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

const loginController = async (req, res) => {
    try {
        const user = await loginService(req.body);
        const token = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        res.status(200).json({
            success: true,
            message: "User logged in successfully",

            token: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })

    }
}


module.exports = {
    signUpController,
    loginController
};