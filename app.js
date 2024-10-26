const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contentRoutes = require('./routes/contentRoutes');
const connectToDatabase = require('./config/config')
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true

// })
//   .then(() => console.log('MongoDB connected successfully!'))
//   .catch((err) => console.log('MongoDB connection error:', err));

connectToDatabase();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Adjust this as needed
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// Routes
app.use('/api/content', contentRoutes);

// Check that server is running
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
