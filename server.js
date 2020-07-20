const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Router = require('./routes')
const morgan = require('morgan')
const database = require('./db')
const bodyParser = require('body-parser');


const app = express()

app.use(helmet())
app.use(cors())
app.use(Router)
app.use(morgan())
app.use(bodyParser.json())


module.exports = app