/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer"],function(e,n){return n.stop=function(e){return window.document.all&&(e.keyCode=0),e.preventDefault&&(e.preventDefault(),e.stopPropagation()),this}});
//# sourceMappingURL=sourcemaps/stop.js.map
