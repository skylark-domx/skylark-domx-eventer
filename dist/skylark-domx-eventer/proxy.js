/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./compatible"],function(e,n,r){var i=/^([A-Z]|returnValue$|layer[XY]$)/;return n.proxy=function(n,t){var a,o={originalEvent:n};for(a in n)"keyIdentifier"===a||i.test(a)||void 0===n[a]||(o[a]=n[a]);return t&&e.mixin(o,t),r(o,n)}});
//# sourceMappingURL=sourcemaps/proxy.js.map
