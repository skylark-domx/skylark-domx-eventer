define([
	"skylark-langx",
	"./eventer"
],function(langx,eventer){

    function isHandler(callback) {
        return callback && (langx.isFunction(callback) || langx.isFunction(callback.handleEvent));
    }


    return isHandler;
});