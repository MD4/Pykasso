
var RtmClient = function(socket) {
    console.log('User connected');
    this.socket = socket;

    socket.on('choose', this.onChoose);
    socket.on('disconnect', this.onDisconnect);
    socket.on('draw', this.onDraw);
};

RtmClient.prototype.onChoose = function(id){
    console.log('User choose ', id);
};

RtmClient.prototype.onDisconnect = function(){
    console.log('User disconnected');
};

RtmClient.prototype.onDraw = function(draw) {
    console.log('User draw ', draw);
};

module.exports = RtmClient;




