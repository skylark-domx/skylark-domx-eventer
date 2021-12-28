/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./events-handler"],function(n,e,r){var a={};return e.findHandler=function(e){var t=n.uid(e),d=a[t];return d||(d=a[t]=new r(e)),d}});
//# sourceMappingURL=sourcemaps/find-handler.js.map
