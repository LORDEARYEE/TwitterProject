var Twitter = require('twitter');
 
var twitter = new Twitter({
  consumer_key: '0e58AJPd1SxD99EUbKXAuxWMI',
  consumer_secret: 'jKilF3urjDiyGZh9YAWqqGx0u6Xo6HIEMWFXfo2muuVp6jPifa',
  access_token_key: 'sPCmeO9nrDw3YE1kggxTAzbJb2WCwTM0zyfDkF2',
  access_token_secret: 'pieEMrun8XTb4rIWUhiPTSarsMKjJCsoIt1NE5MAQzue0'
});


var count = 0,
	util = require('util');

twitter.stream('filter',{track: 'love'}, function(stream) {

	stream.on('data', function() {
		console.log(util.inspect(data));
		stream.destroy();
		process.exit(0);
	});

});