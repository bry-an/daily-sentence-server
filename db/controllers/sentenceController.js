const { Sentence, User } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const dbModel = await Sentence.create(req.body);
      await User.findOneAndUpdate(req.body.user, { $push: { sentences: dbModel._id } });
      res.json(dbModel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const dbModel = await Sentence
        .findById(req.params.id)
        .populate('user');
      res.json(dbModel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const dbModel = await Sentence
        .findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(dbModel);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      const dbResponse = await Sentence
        .findByIdAndDelete(req.params.id);
      res.json(dbResponse);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  find: async (req, res) => {
    try {
      const dbModel = Sentence
        .findOne(req.body);
      res.json(dbModel);
    } catch (err) {
      res.status(422).json(err);
    }
  },
};
