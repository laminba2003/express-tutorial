import express from 'express'
const bodyParser = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded [les données d'un formulaire html]
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json [un objet json]
app.use(bodyParser.json());

// enregistrement du controller clients dans l'appliation
app.use('/clients', require('./controllers/client.controller'));

// gestion de la page d'accueil
app.get('/', function (request, response) {
   response.send('Bienvenue sur notre application')
 })
 
app.listen(3000, () => console.log('notre application tourne sur le port 3000!'))

