require('dotenv').config()
const app = require('./src/app')

PORT = process.env.PORT || 3000
HOST = process.env.HOST || '0.0.0.0'



app.listen(PORT, HOST, () => {
    console.log(`Server running on port ${HOST}:${PORT}`)
})