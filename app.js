var Q = require('q');

var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db ;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/parties/', function(request, response) {
  console.log('SERVER get parties');
  db.collection('Parties').find().toArray(function	(err,	completedParties)	{
    if	(err)	{
      console.log('SERVER get parties error');
      //	handle	error
      return;
    }
    console.log(completedParties);
    response.send(completedParties);

  });


/*
  response.send([
    {name:'ליכוד', members: ['member1','member2','member3']},
    {name: 'עבודה', members: ['member4','member5']}
  ]);
  */
});

app.get('/party/:id', function(request, response) {
  console.log('SERVER get');
  console.log(request.params.id);

  //TwitterService(request.params.id);
  db.collection('Twitts').find({partyname:request.params.id}).toArray(function	(err,	completedParties) {
    if (err) {
      console.log('SERVER get parties error');
      //	handle	error
      response.sendStatus(200).send();
      return;
    }
    if (completedParties == null || completedParties.length == 0) {
      response.sendStatus(200).send();
    }
    else {
      console.log(completedParties);
      var sum = 0;
      for(var i=0; i< completedParties.length; i++){
        sum = sum + completedParties[i].count;
      }
      //console.log(completedParties[0].count);
      response.send(sum.toString());
    }
  });

});


app.get('/partyforgraph/:id', function(request, response) {
  console.log('SERVER get');
  console.log(request.params.id);

  //TwitterService(request.params.id);
  db.collection('Twitts').find({partyname:request.params.id}).toArray(function	(err,	completedParties) {
    if (err) {
      console.log('SERVER get parties error');
      //	handle	error
      response.sendStatus(200).send();
      return;
    }
    if (completedParties == null || completedParties.length == 0) {
      response.sendStatus(200).send();
    }
    else {
      console.log(completedParties);
      //console.log(completedParties[0].count);
      response.send(completedParties);
    }
  });

});


app.get('/words/', function(request, response) {
  console.log('get words');

Q.ninvoke(db.collection('Words').find({}),'toArray').then(
    function(collection)	{

      console.log('read words', collection);
      response.send(collection);
    })
    .fail(
    function(err)	{
      response.send(err);
      console.log(err);
    });
});

app.post('/party', function(request, response) {
  console.log('SERVER post');
  console.log(request.body);

  db.collection('Parties').insertOne(request.body,function(err,result){
      if (err){
      //handle error
        console.log('error on insert party to db');
          return;
      }

    var savedParty = result.ops[0];
    console.log(savedParty);
    response.send(savedParty);

  });
});

  app.post('/person', function(request, response) {
    console.log('SERVER post');
    console.log(request.body);

    db.collection('Parties').findOne({name:request.body.name}, function(err,party){


      if (party != null){
        console.log("got this party from mongo: ", party);

        party.members = party.members || [];

        party.members.push(request.body.person);

        console.log("members after update will be: ", party.members);
      db.collection('Parties').updateOne({_id:party._id}, {$set: {members: party.members}},function(err,result){
        if (err){
          //handle error
          console.log('error on insert party to db');
          return;
        }
        response.sendStatus(200);
        console.log("updated successfully");
      });
      } else
      {
        console.log("failed to get party from mongo");
      }
  });

    //console.log(request.twitterQueryParams.id);
    //console.log(request.body, request.twitterQueryParams.id, 'query');

  });


  app.post('/word', function(request, response) {
  console.log('SERVER post');
  console.log(request.body);


  db.collection('Words').insertOne(request.body,	function(err,	result)	{
    if	(err)	{
      //	handle	error
      console.log('error in insert key');
      return;
    }

    var	key	=	result.ops[0];
    console.log(key);
  });
  response.sendStatus(200);
});









mongo.connect('mongodb://192.168.100.36/app', function(err, aDb) {
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

    //console.log(response);  // Raw response object.

    console.log('SERVER out TwitterService()');
//    response.send('10');
  });
}



