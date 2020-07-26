const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = Schema(
  {
    username: { type: String, required: true },
    sentences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sentence' }],
  },
  { timestamps: true },
);
const User = mongoose.model('User', UserSchema);
module.exports = User;
