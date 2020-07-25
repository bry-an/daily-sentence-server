const db = require('../models')
module.exports = { 
    create: (req, res) => {
        db.Sentence
            .create(req.body)
            .then(dbModel => { 
                res.json(dbModel)
                console.log(res) 
            })
            .catch(err => res.status(422).json(err))
    },
}