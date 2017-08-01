'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors')({ origin: true });
const getPage = require('./getPage.js');
const firebase = require('./firebase.js');

var http = require("http");
setInterval(function() {
    http.get("https://chabashoy.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

/* var app = express();
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});
 */

function request() {
  console.log(new Date());
  /* getPage.getPage()
    .then(function (result) {
       firebase.sendData(result); 
  }); */
}

/* request(); */

setInterval(request, 1000);
/* app.get('/clima', function (req, res) {
  cors(req, res, () => {
    getPage.getPage()
      .then(function (result) {
        console.log('Retorna Datos > ' + result);
        res.status(200).send(result);
      });
  });
});
 */
