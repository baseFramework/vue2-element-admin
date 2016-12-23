var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');
var AV = require('leanengine');
var path = require('path');
var meta = require('./package.json');

process.on('uncaughtException', function(err) {
  (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('version', meta.version);
app.set('port', process.env.PORT || 5001);
app.set('views', path.join(__dirname, 'dist', 'html'));
app.use(express.static(__dirname + '/dist'));
app.set('logger', console);
app.enable('trust proxy');

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});

app.get('/', function(req, res) {
  res.send('hello');
  //res.render('index');
});


if (require.main === module) {
  app.listen(app.get('port'), function() {
    console.log('[%s] Express server listening on port %d',
      app.get('env').toUpperCase(), app.get('port'));
  });
}
