define([
	"skylark-langx",
	"./eventer",
    "./event-bindings",
    "./special-events",
    "./parse"
],function(langx,eventer,EventBindings,specialEvents,parse){
    var    EventsHandler = langx.klass({
        init: function(elm) {
            this._target = elm;
            this._handler = {};
        },

        // add a event listener
        // selector Optional
        register: function(event, callback, options) {
            // Seperate the event from the namespace
            var parsed = parse(event),
                event = parsed.type,
                specialEvent = specialEvents[event],
                bindingEvent = specialEvent && (specialEvent.bindType || specialEvent.bindEventName);

            var events = this._handler;

            // Check if there is already a handler for this event
            if (events[event] === undefined) {
                events[event] = new EventBindings(this._target, bindingEvent || event);
            }

            // Register the new callback function
            events[event].add(callback, langx.mixin({
                ns: parsed.ns
            }, options)); // options:{selector:xxx}
        },

        // remove a event listener
        unregister: function(event, fn, options) {
            // Check for parameter validtiy
            var events = this._handler,
                parsed = parse(event);
            event = parsed.type;

            if (event) {
                var listener = events[event];

                if (listener) {
                    listener.remove(fn, langx.mixin({
                        ns: parsed.ns
                    }, options));
                }
            } else {
                //remove all events
                for (event in events) {
                    var listener = events[event];
                    listener.remove(fn, langx.mixin({
                        ns: parsed.ns
                    }, options));
                }
            }
        }
    });


    return eventer.EventsHandler = EventsHandler;
});