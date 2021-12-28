define([
	"skylark-langx",
	"./eventer",
    "./trigger"
],function(langx,eventer,trigger){

    var focusedQueue = [],
        focuser = langx.loop(function(){
            for (var i = 0; i<focusedQueue.length; i++) {
                trigger(focusedQueue[i],"focused");
            }
            focusedQueue = [];
        });

    focuser.start();


    function focused(elm) {
        if (!focusedQueue.includes(elm)) {
            focusedQueue.push(elm)
        }
    }

    return eventer.focused = focused;
});