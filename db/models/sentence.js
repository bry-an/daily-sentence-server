const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SentenceSchema = Schema(
    {
        date: {Type: Date, required: true},
        sentence: {type: String, required: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
    }, 
    { timestamps: true }
);
const Sentence = mongoose.model("Sentence", SentenceSchema);
module.exports = Sentence;