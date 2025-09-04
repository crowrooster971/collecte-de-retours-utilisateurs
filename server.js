const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\u0027application de collecte de retours utilisateurs !');
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur http://localhost:${port}`);
});
