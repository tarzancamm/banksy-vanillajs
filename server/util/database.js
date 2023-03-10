const {Sequelize} = require('sequelize')
require('dotenv').config()
const {DATABASE_URL} = process.env

const db = new Sequelize(DATABASE_URL)

module.exports = db