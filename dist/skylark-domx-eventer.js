/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){var n=t.define,r=t.require,o="function"==typeof n&&n.amd,i=!o&&"undefined"!=typeof exports;if(!o&&!n){var s={};n=t.define=function(e,t,n){"function"==typeof n?(s[e]={factory:n,deps:t.map(function(t){return function(e,t){if("."!==e[0])return e;var n=t.split("/"),r=e.split("/");n.pop();for(var o=0;o<r.length;o++)"."!=r[o]&&(".."==r[o]?n.pop():n.push(r[o]));return n.join("/")}(t,e)}),resolved:!1,exports:null},r(e)):s[e]={factory:null,resolved:!0,exports:n}},r=t.require=function(e){if(!s.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var n=s[e];if(!n.resolved){var o=[];n.deps.forEach(function(e){o.push(r(e))}),n.exports=n.factory.apply(t,o)||null,n.resolved=!0}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,t){e("skylark-domx-eventer/eventer",["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-finder","skylark-domx-noder","skylark-domx-data"],function(e,t,n,r,o,i){t.mixin,t.each,Array.prototype.slice;var s=t.uid,a=/^([A-Z]|returnValue$|layer[XY]$)/,u={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},c=/complete|loaded|interactive/;function d(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(u,function(r,o){var i=n[r];e[r]=function(){return this[o]=t.returnTrue,i&&i.apply(n,arguments)},e[o]=t.returnFalse})),e}function l(e){var t=(""+e).split(".");return{type:t[0],ns:t.slice(1).sort().join(" ")}}var f=function(){var e=[window.CustomEvent,window.CompositionEvent,window.DragEvent,window.Event,window.FocusEvent,window.KeyboardEvent,window.MessageEvent,window.MouseEvent,window.MouseScrollEvent,window.MouseWheelEvent,window.MutationEvent,window.ProgressEvent,window.TextEvent,window.TouchEvent,window.UIEvent,window.WheelEvent,window.ClipboardEvent],n={compositionstart:1,compositionend:1,compositionupdate:1,beforecopy:16,beforecut:16,beforepaste:16,copy:16,cut:16,paste:16,drag:2,dragend:2,dragenter:2,dragexit:2,dragleave:2,dragover:2,dragstart:2,drop:2,abort:3,change:3,error:3,selectionchange:3,submit:3,reset:3,focus:4,blur:4,focusin:4,focusout:4,keydown:5,keypress:5,keyup:5,message:6,click:7,contextmenu:7,dblclick:7,mousedown:7,mouseup:7,mousemove:7,mouseover:7,mouseout:7,mouseenter:7,mouseleave:7,textInput:12,touchstart:13,touchmove:13,touchend:13,load:14,resize:14,select:14,scroll:14,unload:14,wheel:15};return function(r,o){t.isString(r)?o=o||{}:r=(o=r||{}).type||"";var i=l(r);r=i.type,o=t.mixin({bubbles:!0,cancelable:!0},o),i.ns&&(o.namespace=i.ns);var s=function(t){var r=n[t];r||(r=0);return e[r]}(r),a=new s(r,o);return t.safeMixin(a,o),d(a)}}();function p(e,n){var r,o={originalEvent:e};for(r in e)"keyIdentifier"===r||a.test(r)||void 0===e[r]||(o[r]=e[r]);return n&&t.mixin(o,n),d(o,e)}var v={},h="onfocusin"in window,m={focus:"focusin",blur:"focusout"},g={mouseenter:"mouseover",mouseleave:"mouseout"},y=function(e){return g[e]||h&&m[e]||e},w={},k=t.klass({init:function(e,t){this._target=e,this._event=t,this._bindings=[]},add:function(e,n){var i=this._bindings,s={fn:e,options:t.mixin({},n)};i.push(s);var a=this;if(!a._listener){a._listener=function(e){var n=this,i=p(e),s=e._args,u=a._bindings,c=i.namespace;s=t.isDefined(s)?[i].concat(s):[i],t.each(u,function(e,u){var d=n;if(i.isImmediatePropagationStopped&&i.isImmediatePropagationStopped())return!1;var l=u.fn,f=u.options||{},p=f.selector,v=f.one,h=f.data;if(!c||c==f.ns||-1!==f.ns.indexOf(c)){if(p){if(!(d=r.closest(i.target,p))||d===n)return;t.mixin(i,{currentTarget:d,liveFired:n})}var m=a._event;if(m in g){var y=i.relatedTarget;if(y&&(y===d||o.contains(d,y)))return}t.isDefined(h)&&(i.data=h),v&&a.remove(l,f);var w=l.apply(d,s);!1===w&&(i.preventDefault(),i.stopPropagation())}})};var u=a._event;a._target.addEventListener?a._target.addEventListener(y(u),a._listener,!1):console.warn("invalid eventer object",a._target)}},remove:function(e,n){var r,o;(n=t.mixin({},n)).ns&&(o=n.ns,r=new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)")),this._bindings=this._bindings.filter(function(t){var o=(!e||e===t.fn)&&(!r||r.test(t.options.ns))&&(!n.selector||n.selector==t.options.selector);return!o}),0==this._bindings.length&&(this._target.removeEventListener&&this._target.removeEventListener(y(this._event),this._listener,!1),this._listener=null)}}),x=t.klass({init:function(e){this._target=e,this._handler={}},register:function(e,n,r){var o=l(e),e=o.type,i=v[e],s=i&&(i.bindType||i.bindEventName),a=this._handler;void 0===a[e]&&(a[e]=new k(this._target,s||e)),a[e].add(n,t.mixin({ns:o.ns},r))},unregister:function(e,n,r){var o=this._handler,i=l(e);if(e=i.type){var s=o[e];s&&s.remove(n,t.mixin({ns:i.ns},r))}else for(e in o){var s=o[e];s.remove(n,t.mixin({ns:i.ns},r))}}}),E=function(e){var t=s(e),n=w[t];return n||(n=w[t]=new x(e)),n};function b(e,n,r,o,i,s){if(t.isPlainObject(n))return t.each(n,function(t,n){b(e,t,r,o,n,s)}),this;t.isString(r)||t.isFunction(i)||(i=o,o=r,r=void 0),t.isFunction(o)&&(i=o,o=void 0),!1===i&&(i=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var a=E(e);return n.forEach(function(e){if("ready"==e)return _(i);a.register(e,i,{data:o,selector:r,one:!!s})}),this}function _(e){return c.test(document.readyState)&&document.body?t.defer(e):document.addEventListener("DOMContentLoaded",e,!1),this}var C={backspace:8,comma:188,delete:46,down:40,end:35,enter:13,escape:27,home:36,left:37,page_down:34,page_up:33,period:190,right:39,space:32,tab:9,up:38};function P(){return P}return n.support.transition&&(v.transitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end}),t.mixin(P,{create:f,keys:C,off:function e(n,r,o,i){if(t.isPlainObject(r))return t.each(r,function(t,r){e(n,t,o,r)}),this;t.isString(o)||t.isFunction(i)||!1===i||(i=o,o=void 0);!1===i&&(i=t.returnFalse);"string"==typeof r&&(r=r.indexOf(",")>-1?r.split(","):r.split(/\s/));var s=E(n);r&&r.forEach(function(e){s.unregister(e,i,{selector:o})});return this},on:b,one:function(e,t,n,r,o){return b(e,t,n,r,o,1),this},proxy:p,ready:_,shortcuts:function(e){var t=i.data(e,"shortcuts");if(!t){t={},i.data(e,"shortcuts",t);var n=function(e,t){var n=t.metaKey||t.ctrlKey;if(e.ctrl==n&&e.alt==t.altKey&&e.shift==t.shiftKey&&(t.keyCode==e.keyCode||t.charCode&&t.charCode==e.charCode))return t.preventDefault(),"keydown"==t.type&&e.fn(t),!0};b(e,"keyup keypress keydown",function(e){if(!/INPUT|TEXTAREA/.test(e.target.nodeName))for(var r in t)n(t[r],e)})}return{add:function(e,n){(e.indexOf(",")>-1?e.toLowerCase().split(","):e.toLowerCase().split(" ")).forEach(function(e){var r={fn:n,alt:!1,ctrl:!1,shift:!1};e.split("+").forEach(function(e){switch(e){case"alt":case"ctrl":case"shift":r[e]=!0;break;default:r.charCode=e.charCodeAt(0),r.keyCode=C[e]||e.toUpperCase().charCodeAt(0)}});var o=(r.ctrl?"ctrl":"")+","+(r.alt?"alt":"")+","+(r.shift?"shift":"")+","+r.keyCode;t[o]=r})}}},special:v,stop:function(e){window.document.all&&(e.keyCode=0);e.preventDefault&&(e.preventDefault(),e.stopPropagation());return this},trigger:function(e,t,n){var r;r=t instanceof Event?t:f(t,n);r._args=n;var o=e.dispatchEvent||e.trigger;o?o.call(e,r):console.warn("The evented parameter is not a eventable object");return this}}),e.attach("domx.eventer",P)}),e("skylark-domx-eventer/main",["./eventer","skylark-domx-velm","skylark-domx-query"],function(e,t,n){t.delegate(["off","on","one","shortcuts","trigger"],e);return["keyUp","keyDown","mouseOver","mouseOut","click","dblClick","change"].forEach(function(e){var t=e;VisualElement.prototype[t]=function(t){return this.on(e.toLowerCase(),t),this}}),n.fn.on=n.wraps.wrapper_every_act(e.on,e),n.fn.off=n.wraps.wrapper_every_act(e.off,e),n.fn.trigger=n.wraps.wrapper_every_act(e.trigger,e),"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error transitionEnd".split(" ").forEach(function(e){n.fn[e]=function(t,n){return 0 in arguments?this.on(e,t,n):this.trigger(e)}}),n.fn.one=function(e,t,n,r){return langx.isString(t)||langx.isFunction(r)||(r=n,n=t,t=null),langx.isFunction(n)&&(r=n,n=null),this.on(e,t,n,r,1)},n.ready=e.ready,e}),e("skylark-domx-eventer",["skylark-domx-eventer/main"],function(e){return e})}(n),!o){var a=r("skylark-langx/skylark");i?module.exports=a:t.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-eventer.js.map
