const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const Router = require('./routes')
const morgan = require('morgan')
const database = require('./db')
const bodyParser = require('body-parser');
const middlewares = require('./middlewares')


const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(Router)
app.use(middlewares.notFound)
app.use(middlewares.logger)


module.exports = app