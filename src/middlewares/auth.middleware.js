const jwt = require("jsonwebtoken")

const IsAuthenticated = async (req, res, next) =>{
  const token = req.headers["access-token"]

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  const user = jwt.verify(token, process.env.JWT_SECRET_KEY)

  req.user = user; // {id: "1234", email: "user@example.com"}
  next();
}



module.exports = IsAuthenticated