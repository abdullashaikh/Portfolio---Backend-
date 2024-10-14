const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  year: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  technologies: [{ type: String, required: true }]
});

module.exports = mongoose.model('Experience', ExperienceSchema);
