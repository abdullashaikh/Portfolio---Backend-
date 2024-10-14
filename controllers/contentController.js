const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Contact = require('../models/Contact');
const About = require('../models/About');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, image, description, technologies, link } = req.body;
    const newProject = new Project({ title, image, description, technologies, link });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new experience
exports.createExperience = async (req, res) => {
  try {
    const { year, role, company, description, technologies } = req.body;
    const newExperience = new Experience({ year, role, company, description, technologies });
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all experiences
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new contact
exports.createContact = async (req, res) => {
  try {
    const { address, phoneNo, email } = req.body;
    const newContact = new Contact({ address, phoneNo, email });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get contact info
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create about section
exports.createAbout = async (req, res) => {
  try {
    const { aboutText } = req.body;
    const newAbout = new About({ aboutText });
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get about section
exports.getAboutContent = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
