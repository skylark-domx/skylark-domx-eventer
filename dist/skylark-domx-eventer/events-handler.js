/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./event-bindings","./special-events","./parse"],function(n,e,i,t,r){var s=n.klass({init:function(n){this._target=n,this._handler={}},register:function(e,s,a){var v=r(e),d=(e=v.type,t[e]),l=d&&(d.bindType||d.bindEventName),h=this._handler;void 0===h[e]&&(h[e]=new i(this._target,l||e)),h[e].add(s,n.mixin({ns:v.ns},a))},unregister:function(e,i,t){var s=this._handler,a=r(e);if(e=a.type)(v=s[e])&&v.remove(i,n.mixin({ns:a.ns},t));else for(e in s){var v;(v=s[e]).remove(i,n.mixin({ns:a.ns},t))}}});return e.EventsHandler=s});
//# sourceMappingURL=sourcemaps/events-handler.js.map
