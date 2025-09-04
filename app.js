const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const retoursRoutes = require('./routes/retours');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/retours';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/retours', retoursRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});