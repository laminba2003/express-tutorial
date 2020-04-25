var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

var monJson = require('pays.json');
var chaine = '{ code: FR, pays: France }';
var monJson = JSON.parse(chaine);

var fs = require('fs');
fs.readFile('pays.json', 'utf8', function (erreur, donnees)
{
 if (erreur)
 throw erreur; 
 var monJson = JSON.parse(donnees);
});