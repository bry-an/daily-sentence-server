const express = require('express');

const Router = express.Router();
const { User, Sentence } = require('../db/controllers');

Router.get('/', (req, res) => res
  .status(200)
  .send('Healthy'));

Router.route('/sentence').post(Sentence.create);
Router.route('/sentence/:id').get(Sentence.findById);
Router.route('/sentence/:id').put(Sentence.update);
Router.route('/sentence/:id').delete(Sentence.delete);
Router.route('/sentence/find/').post(Sentence.find);

module.exports = Router;
