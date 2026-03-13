const express = require('express')
const app = express()

const routes = require("./routes")

app.use(express.json()) // for parsing application/json //json format me incoming data ko accept krta hai

// http://localhost:4001/api
app.use("/api", routes)




// http://localhost:4001/health
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Api is running"
    })
})

module.exports = app;