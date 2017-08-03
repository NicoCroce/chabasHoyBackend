'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors')({ origin: true });
const getPage = require('./getPage.js');
const firebase = require('./firebase.js');

var app = express();
app.set('port', (process.env.PORT || 2173));

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});

/* setInterval(function () {
  app.get("https://chabashoy.herokuapp.com/");
  console.log('Despertando');
}, 300000); // every 5 minutes (300000) */

app.get('/', function (req, res) {
  cors(req, res, () => {
    getPage.getPage()
    res.status(200).send('Conectado');
  });
});

app.get('/clima', function (req, res) {
  cors(req, res, () => {
    getPage.getPage()
      .then(function (result) {
        console.log('Eviando a Firebase: ' + new Date());
        firebase.sendData(result);
        res.status(200).send(result);
      });
  });
});

/*  function request() {
  getPage.getPage()
    .then(function (result) {
      firebase.sendData(result);
    });
  console.log('Eviando a Firebase: ' + new Date());
}

request();

setInterval(request, 60000);  */


