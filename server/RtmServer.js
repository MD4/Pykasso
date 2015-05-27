var RtmClient = require('./RtmClient');

var RtmServer = function (io) {
    this.io = io;
};

RtmServer.prototype.start = function () {
    this.io.on('connection', function (socket) {
        new RtmClient(socket);
    });
};


module.exports = RtmServer;




