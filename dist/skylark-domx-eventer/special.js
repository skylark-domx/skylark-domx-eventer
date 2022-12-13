/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-browser","./eventer"],function(n,e,r){var t={};return e.support.transition&&(t.transitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end}),r.special=t});
//# sourceMappingURL=sourcemaps/special.js.map
