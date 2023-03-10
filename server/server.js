const express = require("express");
const cors = require("cors");
const db = require("./util/database");
const {PORT} = process.env

const server = express()

// Middleware to parse incoming req to JSON and accept client & server running on seperate ports
server.use(express.json())
server.use(cors())


// Sync DB and run server
db.sync()
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})