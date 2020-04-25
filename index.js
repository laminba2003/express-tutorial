const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/pays', function (req, res) {
   fs.readFile('pays.json', 'utf8', function (erreur, donnees) {
	if (erreur) throw erreur; 
	res.send(donnees);
  });
})


const server = app.listen(8082, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});

