'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors')({ origin: true });
const getPage = require('./getPage.js');
var app = express();
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
});

app.get('/clima', function(req, res){
  getPage.getPage()
    .then(function (result) {
      console.log(result);
      res.status(200).send(result);
    });
});
/* cors(req, res, () =>  {*/
  
  // [END sendResponse]
/* }); */