const mongoose = require('mongoose');

let isConnected; // Track the connection status

const connectToDatabase = async () => {
  if (isConnected) {
    console.log('=> using existing MongoDB connection');
    return;
  }

  console.log('=> using new MongoDB connection');
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.log('MongoDB connection error:', err));

  ;

  isConnected = mongoose.connection.readyState;
};

module.exports = connectToDatabase;
