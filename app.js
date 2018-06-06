const express = require('express');
const app = express();
const path = require('path');
const meta = require('./package.json');
const controller = require("./server/controller"); // 路由
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

process.on('uncaughtException', function(err) {
  (app.get('logger') || console).error('Uncaught exception:\n', err.stack);
});

app.set('name', meta.name);
app.set('version', meta.version);
app.set('port', process.env.PORT || 6660);
app.set('views', path.join(__dirname, 'dist', 'html'));
app.use(express.static(__dirname + '/dist'));
app.use(cookieParser());
app.use(bodyParser.json());
app.set('logger', console);
app.enable('trust proxy');
app.use(controller());

module.exports = app;