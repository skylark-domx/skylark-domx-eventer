/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./event-bindings","./special","./parse"],function(n,e,i,t,r){var s=n.klass({init:function(n){this._target=n,this._handler={}},register:function(e,s,a){var d=r(e),v=(e=d.type,t[e]),l=v&&(v.bindType||v.bindEventName),h=this._handler;void 0===h[e]&&(h[e]=new i(this._target,l||e)),h[e].add(s,n.mixin({ns:d.ns},a))},unregister:function(e,i,t){var s=this._handler,a=r(e);if(e=a.type)(d=s[e])&&d.remove(i,n.mixin({ns:a.ns},t));else for(e in s){var d;(d=s[e]).remove(i,n.mixin({ns:a.ns},t))}}});return e.EventsHandler=s});
//# sourceMappingURL=sourcemaps/events-handler.js.map
