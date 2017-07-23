'use strict';
// CORS Express middleware to enable CORS Requests.
const express = require('express');
const cors = require('cors')({ origin: true });
const getPage = require('./getPage.js');


var app = express();
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res){
  getPage.getPage()
    .then(function (result) {
      console.log(result);
      res.status(200).send(result);
    });
});
/* cors(req, res, () =>  {*/
  
  // [END sendResponse]
/* }); */