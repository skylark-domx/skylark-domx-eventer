/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./find-handler","./is-handler"],function(n,e,i,r){return e.off=function e(t,s,f,a){if(n.isPlainObject(s))return n.each(s,function(n,i){e(t,n,f,i)}),this;n.isString(f)||r(a)||!1===a||(a=f,f=void 0),!1===a&&(a=n.returnFalse),"string"==typeof s&&(s=s.indexOf(",")>-1?s.split(","):s.split(/\s/));var l=i(t);return s&&s.forEach(function(n){l.unregister(n,a,{selector:f})}),this}});
//# sourceMappingURL=sourcemaps/off.js.map
