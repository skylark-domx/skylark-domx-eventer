/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./trigger"],function(n,e,r){var t=[];return n.loop(function(){for(var n=0;n<t.length;n++)r(t[n],"focused");t=[]}).start(),e.focused=function(n){t.includes(n)||t.push(n)}});
//# sourceMappingURL=sourcemaps/focused.js.map
