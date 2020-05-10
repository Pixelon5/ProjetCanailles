const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CounterSchema = new Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});

let Atelier = new Schema({
  nom: {type: String},
  machines: {type: [String]},
  possibleEtats: {type: [String]}
},{
  collection: 'atelier'
});

let AdressePostale = new Schema({
  nom: {type: String},
  rue: {type: String},
  complement: {type: String},
  cp: {type: String},
  commune: {type: String},
  pays: {type: String},
  telephone: {type: String},
  email: {type: String}
});

let Commande = new Schema({
  fournisseur: {type: String},
  refAchat: {type: String}
},{
  collection: 'commande'
});

let Serie = new Schema({
  visuel: {type: String},
  quantite: {type: Number},
  etats: {type: Object},
  support: {type: String},
  clairFonce: {type: String},
  faces: {type: Number},
  atelier: {type: Atelier},
  machine: {type: String},
  checkPliage: {type: Boolean},
  checkSachet: {type: Boolean},
  checkCouture: {type: Boolean},
  commentaireOption: {type: String},
  checkTransfertInterne: {type: Boolean},
  dateProduction: {type: Date},
  textile: {type: String},
  bonATirer: {type: String},
  rang: {type: Number}
},{
  collection: 'serie'
});
// Define collection and schema for Dossier
let Dossier = new Schema({
  codeBarre: {type: String},
  client: {type: String},
  codeClient: {type: String},
  description: {type: String},
  dateDepartAtelier: {type: Date},
  referent: {type: String},
  modeExpedition: {type: String},
  adresseLivraison: {type: AdressePostale},
  referentClient: {type: String},
  revendeur: {type: Boolean},
  series: {type: [Serie]},
  datePaiement: {type: Date},
  dateBATFait: {type: Date},
  dateRelanceValidationBAT: {type: Date},
  dateValidationBAT: {type: Date},
  dateAchat: {type: Date},
  dateProgrammeFait: {type: Date},
  dateRelanceValidationProgramme: {type: Date},
  dateValidationProgramme: {type: Date},
  commandes: {type: [Commande]},
  dateFicheImprimee: {type: Date},
  dateFacture: {type: Date},
  gaches: {type: Number},
  retouches: {type: Number},
  operateur: {type: String},
  express: {type: Boolean}
},{
  collection: 'dossier'
});

class DossierClass {
  static async getTTPByAtelier(atelier, dateMin, dateMax) {
    const dossiers =  await this.find({datePaiement: {$gt: dateMin, $lte: dateMax}});
    const etatsToCheck = this.getEtatsToCheckAtelier(atelier);

    let ttps = [];

    dossiers.forEach((dossier) => {
      const dateCreation = new Date(dossier._id.getTimestamp()).getTime();
      dossier.series.forEach((serie) => {
        if (serie.atelier.nom === atelier) {
          console.log(serie.etats);
          const etatsSerie = serie.etats;
          let maxElapsed = 0;
          let tempElapsed;
          let etatManquant = false;
          if (etatsSerie) {
            for (let etat of etatsToCheck) {
              if ((!etat in etatsSerie || etatsSerie[etat] === null) && !dossier[etat]) {
                etatManquant = true;
                break;
              } else {
                tempElapsed = new Date(etatsSerie[etat]).getTime() - dateCreation;
                maxElapsed = tempElapsed > maxElapsed ? tempElapsed : maxElapsed;
              }
            }
            if (!etatManquant) {
              ttps.push(Math.ceil(maxElapsed / 86400000));
            }
          }
        }
      });
    });

    return ttps;
  }

  static getEtatsToCheckAtelier(atelier) {
    let etatsCheckSerie;
    let etatsCheckDossier;
    switch (atelier) {
      case 'Sérigraphie':
        etatsCheckSerie = ['Picking', 'Ecran'];
        etatsCheckDossier = ['dateValidationBAT'];
        break;
      case 'Pose':
        etatsCheckSerie = ['Transfert', 'Picking'];
        etatsCheckDossier = ['dateValidationBAT'];
        break;
      case 'Broderie':
        etatsCheckSerie = ['Picking'];
        etatsCheckDossier = ['dateValidationProgramme'];
        break;
      case 'Numérique':
        etatsCheckSerie = ['Picking'];
        etatsCheckDossier = ['dateValidationBAT'];
        break;
    }
    return etatsCheckSerie.concat(etatsCheckDossier);
  }
}

const counter = mongoose.model('counter', CounterSchema);

Dossier.pre('save', function(next) {
  const doc = this;
  counter.findOneAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, {new: true, upsert: true}).then(function(count) {
    doc.codeBarre = 'KP' + count.seq;
    next();
  })
    .catch(function(error) {
      console.error("counter error-> : "+error);
      throw error;
    });
});

Dossier.loadClass(DossierClass);

module.exports = mongoose.model('Dossier', Dossier);
