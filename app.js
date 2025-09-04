const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const retoursRoutes = require('./routes/retours');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/retours', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch(err => console.error('Erreur de connexion à la base de données', err));

app.use('/api/retours', retoursRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
