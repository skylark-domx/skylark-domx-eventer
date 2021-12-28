/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./find-handler","./is-handler"],function(n,e,i,r){return e.on=function e(t,a,o,s,d,f,l){if(n.isPlainObject(a))return n.each(a,function(n,i){e(t,n,o,s,i,l)}),this;n.isString(o)||r(d)||(l=f,f=d,d=s,s=o,o=void 0),r(s)&&(l=f,f=d,d=s,s=void 0),n.isBoolean(f)&&(l=f,f=void 0),!1===d&&(d=n.returnFalse),"string"==typeof a&&(a=a.indexOf(",")>-1?a.split(","):a.split(/\s/));var c=i(t);return a.forEach(function(n){if("ready"==n)return ready(d);c.register(n,d,{data:s,selector:o,ctx:f,one:!!l})}),this}});
//# sourceMappingURL=sourcemaps/on.js.map
