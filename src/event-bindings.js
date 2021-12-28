define([
	"skylark-langx",
    "skylark-domx-finder",
    "skylark-domx-noder",
	"./eventer",
    "./proxy"
],function(langx,finder,noder,eventer,proxy){
    var focusinSupported = "onfocusin" in window,
        focus = { focus: "focusin", blur: "focusout" },
        hover = { mouseenter: "mouseover", mouseleave: "mouseout" },
        realEvent = function(type) {
            return hover[type] || (focusinSupported && focus[type]) || type;
        };

    var    EventBindings = langx.klass({
        init: function(target, event) {
            this._target = target;
            this._event = event;
            this._bindings = [];
        },

        add: function(fn, options) {
            var bindings = this._bindings,
                binding = {
                    fn: fn,
                    options: langx.mixin({}, options)
                };

            bindings.push(binding);

            var self = this;
            if (!self._listener) {
                self._listener = function(domEvt) {
                    var elm = this,
                        e = proxy(domEvt),
                        args = domEvt._args,
                        bindings = self._bindings,
                        ns = e.namespace;

                    if (langx.isDefined(args)) {
                        args = [e].concat(args);
                    } else {
                        args = [e];
                    }

                    e.type = self._event; // convert realEvent to listened event

                    langx.each(bindings, function(idx, binding) {
                        var match = elm;
                        if (e.isImmediatePropagationStopped && e.isImmediatePropagationStopped()) {
                            return false;
                        }
                        var fn = binding.fn,
                            options = binding.options || {},
                            selector = options.selector,
                            one = options.one,
                            data = options.data;

                        if (ns && ns != options.ns && options.ns.indexOf(ns) === -1) {
                            return;
                        }
                        if (selector) {
                            match = finder.closest(e.target, selector);
                            if (match && match !== elm) {
                                langx.mixin(e, {
                                    currentTarget: match,
                                    liveFired: elm
                                });
                            } else {
                                return;
                            }
                        }

                        var originalEvent = self._event;
                        if (originalEvent in hover) {
                            var related = e.relatedTarget;
                            if (related && (related === match || noder.contains(match, related))) {
                                return;
                            }
                        }

                        if (langx.isDefined(data)) {
                            e.data = data;
                        }

                        if (one) {
                            self.remove(fn, options);
                        }

                        var result ;
                        if (fn.handleEvent) {
                            result = fn.handleEvent.apply(fn,args);
                        } else {
                            if (options.ctx) {
                                result = fn.apply(options.ctx, args);                                   
                            } else {
                                result = fn.apply(match, args);                                   
                            }
                        }

                        if (result === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });;
                };

                var event = self._event;
                /*
                                    if (event in hover) {
                                        var l = self._listener;
                                        self._listener = function(e) {
                                            var related = e.relatedTarget;
                                            if (!related || (related !== this && !noder.contains(this, related))) {
                                                return l.apply(this, arguments);
                                            }
                                        }
                                    }
                */

                if (self._target.addEventListener) {
                    self._target.addEventListener(realEvent(event), self._listener, false);
                } else {
                    console.warn("invalid eventer object", self._target);
                }
            }

        },
        remove: function(fn, options) {
            options = langx.mixin({}, options);

            function matcherFor(ns) {
                return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)");
            }
            var matcher;
            if (options.ns) {
                matcher = matcherFor(options.ns);
            }

            this._bindings = this._bindings.filter(function(binding) {
                var removing = (!fn || fn === binding.fn) &&
                    (!matcher || matcher.test(binding.options.ns)) &&
                    (!options.selector || options.selector == binding.options.selector);

                return !removing;
            });
            if (this._bindings.length == 0) {
                if (this._target.removeEventListener) {
                    this._target.removeEventListener(realEvent(this._event), this._listener, false);
                }
                this._listener = null;
            }
        }
    });

    return eventer.EventBindings = EventBindings;
});