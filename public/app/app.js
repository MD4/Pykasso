Pykasso.app = {
    start: function(){
        console.log("Pykasso.app => started");
        var RtmService = Pykasso.services.RtmService;
        RtmService.choose("d1");

        $(document).ready(Pykasso.painter.init());

        RtmService.onColor(function (color) {
            Pykasso.painter.color = color;
        });

        RtmService.onReceiveDraw(function (draw, color) {
            Pykasso.painter.fromPoints(draw, color);
        });
    }
};