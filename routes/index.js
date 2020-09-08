const express = require('express');

const Router = express.Router();
const { User, Sentence } = require('../db/controllers');

Router.get('/', (req, res) => res
  .status(200)
  .send('Healthy'));

// /user/5f25efed08aee6317394d5ba/sentence/create
Router.route('/sentence/create').post(Sentence.create);
Router.route('/sentence/:id').get(Sentence.findById);
Router.route('/sentence/:id').put(Sentence.update);
Router.route('/sentence/:id').delete(Sentence.delete);
Router.route('/sentence/find/').post(Sentence.find);

Router.route('/user/:id').get(User.findById);
Router.route('/user').post(User.create);
Router.route('/user/:id').delete(User.delete);
Router.route('/user/:id/sentences').get(Sentence.sentencesByUser);
Router.route('/user/:id/').patch(User.update);

module.exports = Router;
