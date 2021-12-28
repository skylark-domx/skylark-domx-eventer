/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer"],function(e,t){var n={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};return t.compatible=function(t,r){return!r&&t.isDefaultPrevented||(r||(r=t),e.each(n,function(n,a){var i=r[n];t[n]=function(){return this[a]=e.returnTrue,i&&i.apply(r,arguments)},t[a]=e.returnFalse})),t}});
//# sourceMappingURL=sourcemaps/compatible.js.map
