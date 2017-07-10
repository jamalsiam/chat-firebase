const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var firebase =require('firebase');
var session = require('express-session');
var handlers = require('./handlers.js');
//middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.post('/api/signup',handlers.handleUser.checkSignup);
app.post('/api/login',handlers.handleUser.checkLogin);
app.post('/api/settings',handlers.handleUser.setSettings);
app.post('/api/getSettings',handlers.handleUser.getSettings);
app.get ('/api/getGroup',handlers.handleGroup.getGroup);
app.post('/api/getMessage',handlers.handleMessage.getMessage);
app.post('/api/sendMessage',handlers.handleMessage.sendMessage);
app.post('/api/getLiveMessage',handlers.handleMessage.getLiveMessage);
app.post('/api/createGroup',handlers.handleGroup.createGroup)

app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;