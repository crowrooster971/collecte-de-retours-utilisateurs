const express = require('express');
const Retour = require('../models/Retour');
const router = express.Router();

// Créer un nouveau retour utilisateur
router.post('/', async (req, res) => {
  const retour = new Retour(req.body);
  try {
    const nouveauRetour = await retour.save();
    res.status(201).send(nouveauRetour);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Récupérer tous les retours
router.get('/', async (req, res) => {
  try {
    const retours = await Retour.find();
    res.status(200).send(retours);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
