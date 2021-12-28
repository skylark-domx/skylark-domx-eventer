/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-browser","./eventer"],function(n,e,t){var r={};return e.support.transition&&(r.transitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end}),t.specialEvents=r});
//# sourceMappingURL=sourcemaps/special-events.js.map
