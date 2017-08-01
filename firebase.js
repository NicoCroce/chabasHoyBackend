var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chabashoytest.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("clima");

function sendData(data) {
    /* var newTelKey = firebase.database().ref('data/servicios/utiles').push().key; */
     ref.update(data);
}

exports.sendData = sendData;