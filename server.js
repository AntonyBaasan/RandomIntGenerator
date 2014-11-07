/**
 * Created by AntonyBaasan on 14-11-07.
 * Starup Node script
 */
//Bring express
var express = require('express');

//is process.env.NODE_ENV value is not set then set Default value (which is "development")
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log("env : "+env);

var app = express();//express as web framework

//takes configuration information for Environment
var config = require('./server/config/config')[env];

console.log('config: %j',config);

require('./server/config/express')(app, config);//configure Express
require('./server/config/routes')(app);//setup Express routes

//Run the server
app.listen(config.port);
console.log("Listening on port "+config.port+" ...");