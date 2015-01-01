//var Q = require('q');
//var twitter = require('./twitterService');
//var mongo = require('mongodb').MongoClient;
//var ObjectID = require('mongodb').ObjectID;
//var express = require('express');
//var bodyParser = require('body-parser');
//var db ;
//var app = express();
//
//app.use(express.static('client'));
//app.use(bodyParser.json());
//mongo.connect('mongodb://192.168.100.36/app', function(err, aDb)
//{
//	if (err)
//	{
//		throw err;
//	}
//
//	db = aDb;
//
//	var server = app.listen(3000, function()
//	{
//		var host = server.address().address;
//		var port = server.address().port;
//		console.log(' [*] Listening at http://%s:%s', host, port);
//	});
//});
//
//app.get('/parties/', function(request, response) {
//  console.log('SERVER get parties');
//  db.collection('Parties').find().toArray(function	(err,	completedParties)	{
//    if	(err)	{
//      console.log('SERVER get parties error');
//      //	handle	error
//      return;
//    }
//    console.log(completedParties);
//    response.send(completedParties);
//
//  });
//});
//
//app.get('/party/:id', function(request, response) {
//  console.log('SERVER get');
//  console.log(request.params.id);
//
//  //getTweetsRelatedTo(request.params.id);
//  db.collection('Twitts').find({partyname:request.params.id}).toArray(function	(err,	completedParties) {
//    if (err) {
//      console.log('SERVER get parties error');
//      //	handle	error
//      response.sendStatus(200).send();
//      return;
//    }
//    if (completedParties == null || completedParties.length == 0) {
//      response.sendStatus(200).send();
//    }
//    else {
//      console.log(completedParties);
//      var sum = 0;
//      for(var i=0; i< completedParties.length; i++){
//        sum = sum + completedParties[i].count;
//      }
//      //console.log(completedParties[0].count);
//      response.send(sum.toString());
//    }
//  });
//
//});
//
//app.get('/partyforgraph/:id', function(request, response) {
//  console.log('SERVER get');
//  console.log(request.params.id);
//
//  //getTweetsRelatedTo(request.params.id);
//  db.collection('Twitts').find({partyname:request.params.id}).toArray(function	(err,	completedParties) {
//    if (err) {
//      console.log('SERVER get parties error');
//      //	handle	error
//      response.sendStatus(200).send();
//      return;
//    }
//    if (completedParties == null || completedParties.length == 0) {
//      response.sendStatus(200).send();
//    }
//    else {
//      console.log(completedParties);
//      //console.log(completedParties[0].count);
//      response.send(completedParties);
//    }
//  });
//
//});
//
//app.get('/words/', function(request, response) {
//  console.log('get words');
//
//Q.ninvoke(db.collection('Words').find({}),'toArray').then(
//    function(collection)	{
//
//      console.log('read words', collection);
//      response.send(collection);
//    })
//    .fail(
//    function(err)	{
//      response.send(err);
//      console.log(err);
//    });
//});
//
//app.post('/party', function(request, response) {
//  console.log('SERVER post');
//  console.log(request.body);
//
//  db.collection('Parties').insertOne(request.body,function(err,result){
//      if (err){
//      //handle error
//        console.log('error on insert party to db');
//          return;
//      }
//
//    var savedParty = result.ops[0];
//    console.log(savedParty);
//    response.send(savedParty);
//
//  });
//});
//
//app.post('/person', function(request, response) {
//    console.log('SERVER post');
//    console.log(request.body);
//
//    db.collection('Parties').findOne({name:request.body.name}, function(err,party){
//
//
//      if (party != null){
//        console.log("got this party from mongo: ", party);
//
//        party.members = party.members || [];
//
//        party.members.push(request.body.person);
//
//        console.log("members after update will be: ", party.members);
//      db.collection('Parties').updateOne({_id:party._id}, {$set: {members: party.members}},function(err,result){
//        if (err){
//          //handle error
//          console.log('error on insert party to db');
//          return;
//        }
//        response.sendStatus(200);
//        console.log("updated successfully");
//      });
//      } else
//      {
//        console.log("failed to get party from mongo");
//      }
//  });
//
//    //console.log(request.twitterQueryParams.id);
//    //console.log(request.body, request.twitterQueryParams.id, 'query');
//
//  });
//
//app.post('/word', function(request, response) {
//  console.log('SERVER post');
//  console.log(request.body);
//
//
//  db.collection('Words').insertOne(request.body,	function(err,	result)	{
//    if	(err)	{
//      //	handle	error
//      console.log('error in insert key');
//      return;
//    }
//
//    var	key	=	result.ops[0];
//    console.log(key);
//  });
//  response.sendStatus(200);
//});

var Q = require('q');
var twitter = require('./twitterService');
twitter.getTweetsRelatedTo("bibi netanyahu")
    .then(function(tweets)
    {
        console.log(tweets);
    }, function(error)
    {
        console.log(error);
    });