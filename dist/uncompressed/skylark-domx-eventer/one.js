define([
	"skylark-langx",
	"./eventer",
    "./on"
],function(langx,eventer,on){

    /*   
     * Attach a handler to an event for the elements. The handler is executed at most once per 
     * @param {HTMLElement} elm  
     * @param {String} event
     * @param {String　Optional} selector
     * @param {Anything Optional} data
     * @param {Function} callback
     */
    function one(...args) {
        on(...args, true);

        return this;
    }


    return eventer.one = one;
});