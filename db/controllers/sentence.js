const db = require('../models')
module.exports = { 
    create: (req, res) => {
        db.Sentence
            .update(
                req.body,
                req.body,
                { upsert: true }
                )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
}