const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Router = require('./routes');
require('./db');
const middlewares = require('./middlewares');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(middlewares.logger);
app.use(Router);
app.use(middlewares.notFound);

module.exports = app;
