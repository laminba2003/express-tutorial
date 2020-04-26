const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (request, response) {
   response.send('Hello World');
})

app.get('/pays', function (request, response) {
   fs.readFile('pays.json', 'utf8', function (erreur, donnees) {
	if (erreur) throw erreur; 
	response.send(donnees);
  });
})


const server = app.listen(8082, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});

