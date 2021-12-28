/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer"],function(e,t){var n=/complete|loaded|interactive/;return t.ready=function(t){return n.test(document.readyState)&&document.body?e.defer(t):document.addEventListener("DOMContentLoaded",t,!1),this}});
//# sourceMappingURL=sourcemaps/ready.js.map
