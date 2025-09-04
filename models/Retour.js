const mongoose = require('mongoose');

const retourSchema = new mongoose.Schema({
  nomUtilisateur: String,
  produit: String,
  commentaire: String,
  note: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Retour', retourSchema);
