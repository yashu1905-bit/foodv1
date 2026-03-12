require('dotenv').config()
const app = require('./src/app')
const connectdb=require('./src/database/mongodb') // connect to database
PORT = process.env.PORT || 3000
HOST = process.env.HOST || '0.0.0.0'



app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${HOST}:${PORT}`)
    connectdb() // call the function to connect to database   // call here beacuse db should run only when server is on
})