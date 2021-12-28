/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-data","./eventer","./keys"],function(t,e,a,r){return a.shortcuts=function(t){var a=e.data(t,"shortcuts");if(!a){a={},e.data(t,"shortcuts",a);var o=function(t,e){var a=e.metaKey||e.ctrlKey;if(t.ctrl==a&&t.alt==e.altKey&&t.shift==e.shiftKey&&(e.keyCode==t.keyCode||e.charCode&&e.charCode==t.charCode))return e.preventDefault(),"keydown"==e.type&&t.fn(e),!0};on(t,"keyup keypress keydown",function(t){if(!/INPUT|TEXTAREA/.test(t.target.nodeName))for(var e in a)o(a[e],t)})}return{add:function(t,e){(t.indexOf(",")>-1?t.toLowerCase().split(","):t.toLowerCase().split(" ")).forEach(function(t){var o={fn:e,alt:!1,ctrl:!1,shift:!1};t.split("+").forEach(function(t){switch(t){case"alt":case"ctrl":case"shift":o[t]=!0;break;default:o.charCode=t.charCodeAt(0),o.keyCode=r[t]||t.toUpperCase().charCodeAt(0)}});var n=(o.ctrl?"ctrl":"")+","+(o.alt?"alt":"")+","+(o.shift?"shift":"")+","+o.keyCode;a[n]=o})}}}});
//# sourceMappingURL=sourcemaps/shortcuts.js.map
