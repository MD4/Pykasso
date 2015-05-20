(function() {

    Pykasso.services.RtmService = {
        socket: io(),

        choose: function(id) {
            this.socket.emit('choose', id);
        },

        draw: function (draw, color) {
            this.socket.emit('draw', draw, color);
        },

        onReceiveDraw: function(callback) {
            this.socket.on('draw', callback);
        },

        onColor: function (callBack) {
            this.socket.on('color', callBack);
        }

    };

})();