const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  aboutText: { type: String, required: true }
});

module.exports = mongoose.model('About', AboutSchema);
