var express = require('express');
var http = require('http');
var app = module.exports = express();
var server = http.createServer(app);

var environment = require('./environment');
var service = require('./service');
service.init(environment);


require('./configuration')(app, express);
require('./controller')(app, service, environment);


server.listen(3000);
