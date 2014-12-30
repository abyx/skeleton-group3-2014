var Q = require('q');

var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/party/:id', function(request, response)
{
  console.log('SERVER get');

  TwitterService(request.params.id);

  response.send('10');
});

app.post('/party', function(request, response) {
  console.log('SERVER post');
  console.log(request.body);
  //console.log(request.twitterQueryParams.id);
  //console.log(request.body, request.twitterQueryParams.id, 'query');
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

//////////////////////////////////////////////////////////////////////////////////

var Twitter = require('twitter');

var twitterClient = new Twitter({
  consumer_key: 'o1VI2rlZToVRih3cEK45IHslg',
  consumer_secret: 'OTFoVxvMbCKIf0W9Cr49cxCjjiP45hQEdnozijSWv9287cXJgq',
  access_token_key: '2951059721-t8chP01k7IA2ODE7g12M17PzfqVIyJqR3GyLWVf',
  access_token_secret: '6G0rjNt171Yh8jE5whEDxQcKs6U9YV81ekC1pnZNynDXo'
});

var twitterQueryParams =
{
  q: 'github.com/',
  //since: datestring(),
  result_type: 'mixed'
};

function TwitterService(partyName)
{
  console.log('SERVER in TwitterService()');

  twitterQueryParams.q = partyName;

  twitterClient.get('search/tweets', twitterQueryParams, function(error, params, response){

    if(error)
    {
      console.log('twitter error');
      throw error;
    }

    console.log(params);  // The favorites.

    console.log(response);  // Raw response object.

    console.log('SERVER out TwitterService()');

  });
}



