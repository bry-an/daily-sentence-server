const { Sentence, User } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const sentence = await Sentence.create(req.body);
      await User
        .findByIdAndUpdate(
          req.body.userId,
          { $push: { sentences: sentence._id } },
        );
      res.json({ sentence });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const sentence = await Sentence
        .findById(req.params.id);
      res.json(sentence);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const sentence = await Sentence
        .findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(sentence);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      await Sentence
        .findByIdAndDelete(req.params.id);
      res.status(204).json();
    } catch (err) {
      res.status(500).json(err);
    }
  },
  find: async (req, res) => {
    try {
      const sentence = Sentence
        .findOne(req.body);
      res.json(sentence);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  sentencesByUser: async (req, res) => {
    try {
      const user = await User
        .findById(req.params.id)
        .populate('sentences', 'sentence');
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
