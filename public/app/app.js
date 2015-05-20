Pykasso.app = {
    start: function(){
        var RtmService = Pykasso.services.RtmService;
        console.log(Pykasso);
        RtmService.choose("d1");

        RtmService.onReceiveDraw(function(draw) {
            console.log(draw);
        });
    }
};