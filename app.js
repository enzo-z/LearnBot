const Twit = require('twit')
const prompt = require('prompt');

var Tweet = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

prompt.start();

prompt.get(['message'], (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Input received:');
    console.log(result.message);
    if(!result.message.trim())
        result.message = 'Master Zamora forgot to type a message [DEFAULT MESSAGE]';
    sendTweet(`${result.message}`);
});


function sendTweet(msg){
    Tweet.post('statuses/update', {status:msg}, (err, data, response) => {
        if (err){
            console.log(err);
            return;
        }
        else{
            console.log('Tweet enviado!');
        }
    });
}

