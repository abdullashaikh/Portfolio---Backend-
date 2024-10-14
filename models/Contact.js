const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  address: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Contact', ContactSchema);
