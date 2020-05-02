import express from 'express'
const app = express()

// enregistrement du controller pays dans l'appliation
app.use('/pays', require('./controllers/pays.controller'));

// enregistrement du controller clients dans l'appliation
app.use('/clients', require('./controllers/client.controller'));


// gestion de la page d'accueil
app.get('/', function (request, response) {
   response.send('Bienvenue sur notre application')
 })
 
app.listen(3000, () => console.log('notre application tourne sur le port 3000!'))
