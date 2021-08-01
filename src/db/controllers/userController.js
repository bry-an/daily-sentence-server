const { User } = require('../models');

module.exports = {
  create: (req, res) => {
    try {
      User
        .create(req.body)
        .then((user) => res.json({ user }));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  findById: (req, res) => {
    try {
      User
        .findById(req.params.id)
        .then((user) => res.json({ user }));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  find: (req, res) => {
    try {
      User
        .findOne(req.body)
        .then((user) => res.json({ user }));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: (req, res) => {
    try {
      User
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => res.json({ user }));
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: (req, res) => {
    try {
      User
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json({}));
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
