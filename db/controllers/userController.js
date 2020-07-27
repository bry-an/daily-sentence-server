const { User } = require('../models');

module.exports = {
  create: (req, res) => {
    User
      .create(req.body)
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    User
      .findById(req.params.id)
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => res.status(422).json(err));
  },
  find: (req, res) => {
    User
      .findOne(req.body)
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },
};
