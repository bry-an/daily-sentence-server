const { Sentence, User } = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const dbModel = await Sentence.create(req.body);
      await User.findOneAndUpdate(req.body.user, { $push: { sentences: dbModel._id } });
      res.json(dbModel);
    } catch (err) {
      res.status(422).send(err);
    }
  },
  findById: (req, res) => {
    Sentence
      .findById(req.params.id)
      .populate('user')
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
