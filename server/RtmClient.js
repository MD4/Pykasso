var RtmClient = function (socket) {
    console.log('User connected');
    this.socket = socket;

    socket.on('choose', this.onChoose);
    socket.on('disconnect', this.onDisconnect);
    socket.on('draw', this.onDraw);

    console.log('emit draw');
    this.socket.emit('draw', [
        {
            x: 111,
            y: 211
        },
        {
            x: 411,
            y: 511
        },
        {
            x: 211,
            y: 611
        },
        {
            x: 112,
            y: 111
        },
    ]);
};

RtmClient.prototype.onChoose = function (id) {
    console.log('User choose ', id);
};

RtmClient.prototype.onDisconnect = function () {
    console.log('User disconnected');
};

RtmClient.prototype.onDraw = function (draw) {
    console.log('User draw ', draw);
};

module.exports = RtmClient;




