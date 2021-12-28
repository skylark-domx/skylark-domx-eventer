define([
	"skylark-langx",
	"./eventer",
    "./trigger"
],function(langx,eventer,trigger){

    var resizedQueue = [],
        resizer = langx.loop(function(){
            for (var i = 0; i<resizedQueue.length; i++) {
                trigger(resizedQueue[i],"resized");
            }
            resizedQueue = [];
        });

    resizer.start();


    function resized(elm) {
        if (!resizedQueue.includes(elm)) {
            resizedQueue.push(elm)
        }
    }

    return eventer.resized = resized;
});