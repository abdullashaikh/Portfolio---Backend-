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

const allowedOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173']; // Add other allowed origins as needed

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
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
