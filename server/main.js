var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var DrawingService = require('./services/DrawingService');

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
    DrawingService.create("test");
});