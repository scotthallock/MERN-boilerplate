const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, expires: 3000, default: Date.now },
});

module.exports = mongoose.model('note', noteSchema);
