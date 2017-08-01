'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors')({ origin: true });
const getPage = require('./getPage.js');
const firebase = require('./firebase.js');

/* var app = express();
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});
 */

function request() {
  getPage.getPage()
    .then(function (result) {
       firebase.sendData(result); 
  });
}

request();

setInterval(request, 10000);

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
