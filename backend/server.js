const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = 8001;

// MongoDB connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

mongoose.connect(mongoUrl, {
  dbName: dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} ${req.path}`);
  next();
});

// Define Mongoose Schema and Model
const statusCheckSchema = new mongoose.Schema({
  client_name: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const StatusCheck = mongoose.model('StatusCheck', statusCheckSchema, 'status_checks');

// Routes

// Root route
app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Create status check
app.post('/api/status', async (req, res) => {
  try {
    const { client_name } = req.body;
    
    if (!client_name) {
      return res.status(400).json({ error: 'client_name is required' });
    }

    const statusCheck = new StatusCheck({
      client_name: client_name,
      timestamp: new Date()
    });

    await statusCheck.save();
    
    res.status(201).json({
      id: statusCheck._id,
      client_name: statusCheck.client_name,
      timestamp: statusCheck.timestamp
    });
  } catch (error) {
    console.error('Error creating status check:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all status checks
app.get('/api/status', async (req, res) => {
  try {
    const statusChecks = await StatusCheck.find().limit(1000).sort({ timestamp: -1 });
    
    const formattedChecks = statusChecks.map(check => ({
      id: check._id,
      client_name: check.client_name,
      timestamp: check.timestamp
    }));
    
    res.json(formattedChecks);
  } catch (error) {
    console.error('Error fetching status checks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log(`API routes available at http://0.0.0.0:${PORT}/api/`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, closing server...');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});