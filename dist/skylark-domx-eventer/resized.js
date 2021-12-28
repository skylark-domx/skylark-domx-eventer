/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./trigger"],function(e,n,r){var t=[];return e.loop(function(){for(var e=0;e<t.length;e++)r(t[e],"resized");t=[]}).start(),n.resized=function(e){t.includes(e)||t.push(e)}});
//# sourceMappingURL=sourcemaps/resized.js.map
