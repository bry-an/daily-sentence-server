const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .then((response) => res.json(response))
      .catch((err) => res.status(422).json(err));
  },
};
