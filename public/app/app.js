// namespaces
Pykasso = {
    services: {}
};

Pykasso.app = {
    start: function(){
        var RtmService = Pykasso.services.RtmService;
        console.log(Pykasso);
        RtmService.test();
    }
};