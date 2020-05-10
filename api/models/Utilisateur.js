const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Dossier
let Utilisateur = new Schema({
  pseudo: {type: String},
  hash: {type: String},
  token: {type: String}
},{
  collection: 'utilisateur'
});

module.exports = mongoose.model('Utilisateur', Utilisateur);
