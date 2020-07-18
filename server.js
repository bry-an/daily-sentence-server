const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Router = require('./routes')

const app = express()

app.use(helmet())
app.use(cors())
app.use(Router)


module.exports = app