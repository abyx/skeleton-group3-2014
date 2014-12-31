// module to interface twitter data
(function()
{
	var exports = module.exports = {};
	var Twitter = require('twitter');

	var twitterClient = new Twitter({
		consumer_key: 'o1VI2rlZToVRih3cEK45IHslg',
		consumer_secret: 'OTFoVxvMbCKIf0W9Cr49cxCjjiP45hQEdnozijSWv9287cXJgq',
		access_token_key: '2951059721-t8chP01k7IA2ODE7g12M17PzfqVIyJqR3GyLWVf',
		access_token_secret: '6G0rjNt171Yh8jE5whEDxQcKs6U9YV81ekC1pnZNynDXo'
	});

	exports.getTweetsRelatedTo = function(queryString)
	{
		console.log('SERVER in getTweetsRelatedTo()');

		var queryParams =
		{
			q: queryString,
			//since: datestring(),
			result_type: 'mixed'
		};

		twitterClient.get('search/tweets', queryParams, function(error, tweets, response)
		{
			if(error)
			{
				console.log('twitter error');
				throw error;
			}

			//console.log(tweets);
			console.log('SERVER out getTweetsRelatedTo()');

			return tweets;
		});
	}
})();

