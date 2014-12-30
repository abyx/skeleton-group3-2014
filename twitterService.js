//module.exports = require('./lib/twitter');
var Twitter = require('./lib/twitter');

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

twitterClient.get('search/tweets', twitterQueryParams, function(error, params, response){

    if(error)
    {
        throw error;
    }

    console.log(params);  // The favorites.

    console.log(response);  // Raw response object.

});

//twitterClient.get('favorites/list', function(error, twitterQueryParams, response){
//
//    if(error)
//    {
//        throw error;
//    }
//
//    console.log(twitterQueryParams);  // The favorites.
//
//    console.log(response);  // Raw response object.
//
//});


exports = {
    twitterQ: twitterQueryParams,
    twitterClient: twitterClient
}