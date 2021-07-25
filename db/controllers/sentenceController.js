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
      return res.json({ sentence });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const sentence = await Sentence
        .findById(req.params.id);
	  return res.json({ sentence });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  update: async (req, res) => {
    try {
      const sentence = await Sentence
        .findByIdAndUpdate(req.params.id, req.body, { new: true });
      return res.json({ sentence: sentence.text });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  delete: async (req, res) => {
    try {
      await Sentence
        .findByIdAndDelete(req.params.id);
      return res.status(204).json();
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  find: async (req, res) => {
    try {
      const sentence = Sentence
        .findOne(req.body);
      return res.json({ sentence });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  sentencesByUser: async (req, res) => {
    try {
      const user = await User
        .findById(req.params.id)
        .populate({ path: 'sentences', options: { sort: { createdAt: -1 } } });
      return res.json({ sentences: user.sentences });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
