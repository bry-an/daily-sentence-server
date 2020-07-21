const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SentenceSchema = Schema(
    {
        date: {type: Date, required: true},
        sentence: {type: String, required: true},
        user: {type: Schema.Types.ObjectId, ref: "User"}
    }, 
    { timestamps: true }
);
const Sentence = mongoose.model("Sentence", SentenceSchema);
module.exports = Sentence;