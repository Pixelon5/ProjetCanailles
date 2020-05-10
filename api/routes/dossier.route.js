const express = require('express');
const dossierRoutes = express.Router();
const mongoose = require('mongoose');

// Require Dossier model in our routes module
let Dossier = require('../models/Dossier');

// Defined store route
dossierRoutes.route('/add').post(function (req, res) {
  Dossier.create(req.body, function(err, dossier) {
    if (err) {
      console.log(err);
    } else {
      res.json(dossier);
    }
  });
});

// Defined get data(index or listing) route
dossierRoutes.route('/').get(function (req, res) {
  Dossier.find(function (err, dossiers){
    if(err){
      console.log(err);
    }
    else {
      res.json(dossiers.map(dossier => {
        dossier = dossier.toJSON();
        dossier.dateCreation = mongoose.Types.ObjectId(dossier._id).getTimestamp();
        return dossier;
      }));
    }
  });
});

// Defined get data(index or listing) route
dossierRoutes.route('/:filtreBase').get(function (req, res) {
  let filtre = JSON.parse(req.params.filtreBase);
  Dossier.find(filtre).collation({ locale: "fr", strength: 1 }).exec(function (err, dossiers){
    if(err){
      console.log(err);
    }
    else {
      res.json(dossiers);
    }
  });
});

// Defined edit route
dossierRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Dossier.findById(id, function (err, dossier){
    if(err){
      console.log(err);
    }
    else {
      dossier = dossier.toJSON();
      dossier.dateCreation = mongoose.Types.ObjectId(dossier._id).getTimestamp();
      res.json(dossier);
    }
  });
});

//  Defined update route
dossierRoutes.route('/update/:id').post(function (req, res) {
  Dossier.findById(req.params.id, function(err, dossier) {
    if (!dossier) {
      return res.status(404).json({
        msg: "Dossier not found with id " + req.params.id
      });
    }
    else {
      Dossier.updateOne({_id: req.body._id}, req.body, function(err) {
        if(err){
          console.log(err);
        }
        else {
          res.json(req.body);
        }
      });
    }
  });
});

// Defined delete | remove | destroy route
dossierRoutes.route('/delete/:id').get(function (req, res) {
  Dossier.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

dossierRoutes.route('/ttp/:atelier/:indiceMois').get(function (req, res) {
  const indiceMois = req.params.indiceMois;
  const dateMax = new Date();
  const dateMin = new Date();
  dateMax.setMonth(dateMax.getMonth() - indiceMois);
  dateMin.setMonth(dateMax.getMonth() - 1);

  Dossier.getTTPByAtelier(req.params.atelier, dateMin, dateMax).then(function(ttps) {
    if(!ttps) res.status(404).send('erreur dans la récupération du groupement');
    else res.json(ttps);
  });
});

module.exports = dossierRoutes;
