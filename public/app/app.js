Pykasso.app = {
    start: function(){
        var RtmService = Pykasso.services.RtmService;
        RtmService.choose("d1");

        $(document).ready(Pykasso.painter.init());

        RtmService.onReceiveDraw(function(draw) {
            Pykasso.painter.fromPoints(draw);
        });
    }
};