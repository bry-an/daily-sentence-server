const { Sentence } = require('../models');

module.exports = {
  create: (req, res) => {
    Sentence
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).send(err));
  },
  findById: (req, res) => {
    Sentence
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).send(err));
  },
  update: (req, res) => {
    Sentence
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => res.status(422).send(err));
  },
  delete: (req, res) => {
    Sentence
      .findByIdAndDelete(req.params.id)
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => res.status(422).send(err));
  },
  find: (req, res) => {
    Sentence
      .findOne(req.body)
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => res.status(422).send(err));
  },
};
