var Q = require('q');
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/parties/', function(request, response) {
  console.log('SERVER get parties');
  response.send([
    {name:'ליכוד', members: ['member1','member2','member3']},
    {name: 'עבודה', members: ['member4','member5']}
  ]);
});

app.get('/party/:id', function(request, response) {
  console.log('SERVER get');
  response.send('10');
});

app.post('/party', function(request, response) {
  console.log('SERVER post');
  console.log(request.body);
  //console.log(request.params.id);
  //console.log(request.body, request.params.id, 'query');
  response.sendStatus(200);
});

mongo.connect('mongodb://localhost/app', function(err, aDb) {
  if (err) {
    throw err;
  }

  db = aDb;

  var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log(' [*] Listening at http://%s:%s', host, port);
  });
});

