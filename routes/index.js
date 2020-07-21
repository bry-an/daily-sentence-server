
const express = require('express')
const Router = express.Router()
const { User, Sentence } = require('../db/controllers')

Router.get('/', (req, res) => {
    return res
    .status(200)
    .send("Healthy")
})

Router.route('/add-sentence').post(Sentence.create)

module.exports = Router