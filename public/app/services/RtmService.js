(function() {

    Pykasso.services.RtmService = {
        socket: io(),

        test: function() {
            this.socket.emit('test', 'lol');
        }

    };

})();