/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./eventer","skylark-domx-velm","skylark-domx-query"],function(e,n,o){n.delegate(["off","on","one","shortcuts","trigger"],e);return["keyUp","keyDown","mouseOver","mouseOut","click","dblClick","change"].forEach(function(e){var n=e;VisualElement.prototype[n]=function(n){return this.on(e.toLowerCase(),n),this}}),o.fn.on=o.wraps.wrapper_every_act(e.on,e),o.fn.off=o.wraps.wrapper_every_act(e.off,e),o.fn.trigger=o.wraps.wrapper_every_act(e.trigger,e),"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error transitionEnd".split(" ").forEach(function(e){o.fn[e]=function(n,o){return 0 in arguments?this.on(e,n,o):this.trigger(e)}}),o.fn.one=function(e,n,o,r){return langx.isString(n)||langx.isFunction(r)||(r=o,o=n,n=null),langx.isFunction(o)&&(r=o,o=null),this.on(e,n,o,r,1)},o.ready=e.ready,e});
//# sourceMappingURL=sourcemaps/main.js.map
