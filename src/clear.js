define([
	"skylark-langx",
	"./eventer",
    "./find-handler"
],function(langx,eventer,findHandler){

    /*   
     * Remove all event handlers from the specified element.
     * @param {HTMLElement} elm  
     */
    function clear(elm) {
        var handler = findHandler(elm);

        handler.unregister();

        return this;
    }


    return eventer.clear = clear;
});