var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var RtmServer = require('./RtmServer');

app.use(express.static('public'));

http.listen(3000, function(){
    console.log('listening on *:3000');
});

var rtmServer = new RtmServer(io);

rtmServer.start();