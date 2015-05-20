(function() {

    Pykasso.services.RtmService = {
        socket: io(),

        choose: function(id) {
            this.socket.emit('choose', id);
        },

        draw: function(draw) {
            this.socket.emit('draw', draw);
        },

        onReceiveDraw: function(callback) {
            console.log('bind');
            this.socket.on('draw', callback);
        }

    };

})();