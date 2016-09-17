'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var mongodb = 'mongodb://localhost/jeopardy';
var findDocuments = function(db, callback) {
  // Get the easy collection
  var collection = db.collection('easy');
  // Find some documents
  collection.find({_id: ObjectID("57dda6156cf046eacc286c3b")}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

MongoClient.connect(mongodb, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
  findDocuments(db, function() {
    db.close();
  });

});
// const jeopardy = mongoose.connection;

// jeopardy.on('error', console.error.bind(console, 'connection error:'));
// jeopardy.once('open', function () {
//  console.log('Mongodb connection open');
// });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../../public/client`));

const port = process.env.PORT || 8000;
app.listen(port);


