/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./native-events"],function(n,e,r){return e.isNativeEvent=function(e){if(n.isString(e))return!!r[e];if(n.isArray(e)){for(var t=0;t<e.length;t++)if(r[e])return!1;return e.length>0}}});
//# sourceMappingURL=sourcemaps/is-native-event.js.map
