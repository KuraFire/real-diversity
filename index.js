var express = require('express');
var Flutter = require('flutter');

var flutter = new Flutter({
  consumerKey: 'MY CONSUMER KEY',
  consumerSecret: 'MY CONSUMER SECRET',
  loginCallback: 'http://localhost:5000/twitter/callback',

  authCallback: function(req, res, next) {
    if (req.error) {
      // Authentication failed, req.error contains details
      return;
    }

    var accessToken = req.session.oauthAccessToken;
    var secret = req.session.oauthAccessTokenSecret;

    // Store away oauth credentials here

    // Redirect user back to your app
    res.redirect('/back/to/app');
  }
});

var app = express();

app.get('/twitter/connect', flutter.connect);
app.get('/twitter/callback', flutter.auth);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});