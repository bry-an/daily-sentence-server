const { User } = require('../models');

module.exports = {
  create: (req, res) => {
    User
      .create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  findById: (req, res) => {
    User
      .findById(req.params.id)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  find: (req, res) => {
    User
      .findOne(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  update: (req, res) => {
    User
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  delete: (req, res) => {
    User
      .findByIdAndDelete(req.params.id)
      .then(() => res.status(204).json({}))
      .catch((err) => res.status(500).json(err));
  },

};
