const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./config'),
  jwt = require('./helpers/jwt'),
  errorHandler = require('./helpers/error-handler')

const dossierRoute = require('./routes/dossier.route');
const utilisateurRoute = require('./utilisateurs/utilisateur.controller');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const prod = !!process.env.PORT;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());
app.use('/dossier', dossierRoute);
app.use('/utilisateurs', utilisateurRoute);
app.use(errorHandler);
const port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
