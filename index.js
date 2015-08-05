var express = require('express');
var Flutter = require('flutter');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var logger = require('morgan');

var flutter = new Flutter({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
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

app.use(logger('dev'));

// VIEWS
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// SASS
app.use(sassMiddleware({
  src: __dirname + '/styles',
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'compressed'
}),
express.static(path.join(__dirname)));

app.get('/twitter/connect', flutter.connect);
app.get('/twitter/callback', flutter.auth);

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});