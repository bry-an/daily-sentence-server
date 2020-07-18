
const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    return res
    .status(200)
    .send("Healthy")
})

module.exports = Router