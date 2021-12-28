define([
	"skylark-langx",
	"./eventer",
    "./native-events"
],function(langx,eventer,NativeEvents){
    function isNativeEvent(events) {
        if (langx.isString(events)) {
            return !!NativeEvents[events];
        } else if (langx.isArray(events)) {
            for (var i=0; i<events.length; i++) {
                if (NativeEvents[events]) {
                    return false;
                }
            }
            return events.length > 0;
        }
    }

    return eventer.isNativeEvent = isNativeEvent;
});