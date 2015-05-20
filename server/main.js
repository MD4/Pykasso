var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var RtmServer = require('./RtmServer');
var DrawingService = require('./services/DrawingService');

app.use(express.static('public'));

http.listen(3000, function(){
    console.log('listening on *:3000');
    DrawingService.create("d1");
    DrawingService.addToDrawing("d1", [1,2,3]);
});

var rtmServer = new RtmServer(io);

rtmServer.start();