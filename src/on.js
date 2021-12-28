define([
    "skylark-langx",
    "./eventer",
    "./find-handler",
    "./is-handler"
],function(langx,eventer,findHandler,isHandler){



    /*   
     * Attach an event handler function for one or more events to the selected elements.
     * @param {HTMLElement} elm  
     * @param {String} events
     * @param {String　Optional} selector
     * @param {Anything Optional} data
     * @param {Function} callback
     * @param {Boolean　Optional} one
     */
    function on(elm, events, selector, data, callback, ctx,one) {

        var autoRemove, delegator;
        if (langx.isPlainObject(events)) {
            langx.each(events, function(type, fn) {
                on(elm, type, selector, data, fn, one);
            });
            return this;
        }

        if (!langx.isString(selector) && !isHandler(callback)) {
            one = ctx;
            ctx = callback;
            callback = data;
            data = selector;
            selector = undefined;
        }

        if (isHandler(data)) {
            one = ctx;
            ctx = callback;
            callback = data;
            data = undefined;
        }

        if (langx.isBoolean(ctx)) {
            one = ctx;
            ctx = undefined;
        }
        if (callback === false) {
            callback = langx.returnFalse;
        }

        if (typeof events == "string") {
            if (events.indexOf(",") > -1) {
                events = events.split(",");
            } else {
                events = events.split(/\s/);
            }
        }

        var handler = findHandler(elm);

        events.forEach(function(event) {
            if (event == "ready") {
                return ready(callback);
            }
            handler.register(event, callback, {
                data: data,
                selector: selector,
                ctx : ctx,
                one: !!one
            });
        });
        return this;
    }



    return eventer.on = on;
});