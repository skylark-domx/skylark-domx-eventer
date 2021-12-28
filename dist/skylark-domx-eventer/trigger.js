/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./create"],function(e,n,t){return n.trigger=function(e,n,r){var a;(a=n instanceof Event?n:t(n,r))._args=r;var i=e.dispatchEvent||e.trigger;return i?i.call(e,a):console.warn("The evented parameter is not a eventable object"),this}});
//# sourceMappingURL=sourcemaps/trigger.js.map
