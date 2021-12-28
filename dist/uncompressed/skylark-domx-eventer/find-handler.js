define([
	"skylark-langx",
	"./eventer",
    "./events-handler"
],function(langx,eventer,EventsHandler){
    var handlers = {};

    function findHandler(elm) {
        var id = langx.uid(elm),
            handler = handlers[id];
        if (!handler) {
            handler = handlers[id] = new EventsHandler(elm);
        }
        return handler;
    };


    return eventer.findHandler = findHandler;
});