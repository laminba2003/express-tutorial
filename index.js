import express from 'express'
const app = express()
const pays = require('./controllers/pays.controller');
app.use('/pays', pays);

app.get('/', function (request, response) {
  response.send('hello world')
})

app.listen(3000, () => console.log('app listening on port 3000!'))

import express from 'express'
const app = express()
const pays = require('./controllers/client.controller');
app.use('/client', client);

app.get('/', function (request, response) {
  response.send('here is the clients')
})

app.listen(3000, () => console.log('app listening on port 3000!'))