/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-finder","skylark-domx-noder","skylark-domx-data"],function(e,t,n,i,r,o){t.mixin,t.each,Array.prototype.slice;var a=t.uid,s=/^([A-Z]|returnValue$|layer[XY]$)/,u={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},d=/complete|loaded|interactive/;function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(u,function(i,r){var o=n[i];e[i]=function(){return this[r]=t.returnTrue,o&&o.apply(n,arguments)},e[r]=t.returnFalse})),e}function l(e){var t=(""+e).split(".");return{type:t[0],ns:t.slice(1).sort().join(" ")}}var f=function(){var e=[window.CustomEvent,window.CompositionEvent,window.DragEvent,window.Event,window.FocusEvent,window.KeyboardEvent,window.MessageEvent,window.MouseEvent,window.MouseScrollEvent,window.MouseWheelEvent,window.MutationEvent,window.ProgressEvent,window.TextEvent,window.TouchEvent,window.UIEvent,window.WheelEvent,window.ClipboardEvent],n={compositionstart:1,compositionend:1,compositionupdate:1,beforecopy:16,beforecut:16,beforepaste:16,copy:16,cut:16,paste:16,drag:2,dragend:2,dragenter:2,dragexit:2,dragleave:2,dragover:2,dragstart:2,drop:2,abort:3,change:3,error:3,selectionchange:3,submit:3,reset:3,focus:4,blur:4,focusin:4,focusout:4,keydown:5,keypress:5,keyup:5,message:6,click:7,contextmenu:7,dblclick:7,mousedown:7,mouseup:7,mousemove:7,mouseover:7,mouseout:7,mouseenter:7,mouseleave:7,textInput:12,touchstart:13,touchmove:13,touchend:13,load:14,resize:14,select:14,scroll:14,unload:14,wheel:15};return function(i,r){t.isString(i)?r=r||{}:i=(r=i||{}).type||"";var o=l(i);i=o.type,r=t.mixin({bubbles:!0,cancelable:!0},r),o.ns&&(r.namespace=o.ns);var a=new(function(t){var i=n[t];return i||(i=0),e[i]}(i))(i,r);return t.safeMixin(a,r),c(a)}}();function p(e,n){var i,r={originalEvent:e};for(i in e)"keyIdentifier"===i||s.test(i)||void 0===e[i]||(r[i]=e[i]);return n&&t.mixin(r,n),c(r,e)}var v={},h="onfocusin"in window,g={focus:"focusin",blur:"focusout"},m={mouseenter:"mouseover",mouseleave:"mouseout"},w=function(e){return m[e]||h&&g[e]||e},y={},k=t.klass({init:function(e,t){this._target=e,this._event=t,this._bindings=[]},add:function(e,n){var o=this._bindings,a={fn:e,options:t.mixin({},n)};o.push(a);var s=this;if(!s._listener){s._listener=function(e){var n=this,o=p(e),a=e._args,u=s._bindings,d=o.namespace;a=t.isDefined(a)?[o].concat(a):[o],t.each(u,function(e,u){var c=n;if(o.isImmediatePropagationStopped&&o.isImmediatePropagationStopped())return!1;var l=u.fn,f=u.options||{},p=f.selector,v=f.one,h=f.data;if(!d||d==f.ns||-1!==f.ns.indexOf(d)){if(p){if(!(c=i.closest(o.target,p))||c===n)return;t.mixin(o,{currentTarget:c,liveFired:n})}if(s._event in m){var g=o.relatedTarget;if(g&&(g===c||r.contains(c,g)))return}t.isDefined(h)&&(o.data=h),v&&s.remove(l,f),!1===l.apply(c,a)&&(o.preventDefault(),o.stopPropagation())}})};var u=s._event;s._target.addEventListener?s._target.addEventListener(w(u),s._listener,!1):console.warn("invalid eventer object",s._target)}},remove:function(e,n){var i,r;(n=t.mixin({},n)).ns&&(r=n.ns,i=new RegExp("(?:^| )"+r.replace(" "," .* ?")+"(?: |$)")),this._bindings=this._bindings.filter(function(t){return!((!e||e===t.fn)&&(!i||i.test(t.options.ns))&&(!n.selector||n.selector==t.options.selector))}),0==this._bindings.length&&(this._target.removeEventListener&&this._target.removeEventListener(w(this._event),this._listener,!1),this._listener=null)}}),E=t.klass({init:function(e){this._target=e,this._handler={}},register:function(e,n,i){var r=l(e),o=(e=r.type,v[e]),a=o&&(o.bindType||o.bindEventName),s=this._handler;void 0===s[e]&&(s[e]=new k(this._target,a||e)),s[e].add(n,t.mixin({ns:r.ns},i))},unregister:function(e,n,i){var r=this._handler,o=l(e);if(e=o.type)(a=r[e])&&a.remove(n,t.mixin({ns:o.ns},i));else for(e in r){var a;(a=r[e]).remove(n,t.mixin({ns:o.ns},i))}}}),b=function(e){var t=a(e),n=y[t];return n||(n=y[t]=new E(e)),n};function _(e,n,i,r,o,a){if(t.isPlainObject(n))return t.each(n,function(t,n){_(e,t,i,r,n,a)}),this;t.isString(i)||t.isFunction(o)||(o=r,r=i,i=void 0),t.isFunction(r)&&(o=r,r=void 0),!1===o&&(o=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var s=b(e);return n.forEach(function(e){if("ready"==e)return x(o);s.register(e,o,{data:r,selector:i,one:!!a})}),this}function x(e){return d.test(document.readyState)&&document.body?t.defer(e):document.addEventListener("DOMContentLoaded",e,!1),this}var C={backspace:8,comma:188,delete:46,down:40,end:35,enter:13,escape:27,home:36,left:37,page_down:34,page_up:33,period:190,right:39,space:32,tab:9,up:38};function P(){return P}return n.support.transition&&(v.transitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end}),t.mixin(P,{create:f,keys:C,off:function e(n,i,r,o){if(t.isPlainObject(i))return t.each(i,function(t,i){e(n,t,r,i)}),this;t.isString(r)||t.isFunction(o)||!1===o||(o=r,r=void 0),!1===o&&(o=t.returnFalse),"string"==typeof i&&(i=i.indexOf(",")>-1?i.split(","):i.split(/\s/));var a=b(n);return i&&i.forEach(function(e){a.unregister(e,o,{selector:r})}),this},on:_,one:function(e,t,n,i,r){return _(e,t,n,i,r,1),this},proxy:p,ready:x,shortcuts:function(e){var t=o.data(e,"shortcuts");if(!t){t={},o.data(e,"shortcuts",t);var n=function(e,t){var n=t.metaKey||t.ctrlKey;if(e.ctrl==n&&e.alt==t.altKey&&e.shift==t.shiftKey&&(t.keyCode==e.keyCode||t.charCode&&t.charCode==e.charCode))return t.preventDefault(),"keydown"==t.type&&e.fn(t),!0};_(e,"keyup keypress keydown",function(e){if(!/INPUT|TEXTAREA/.test(e.target.nodeName))for(var i in t)n(t[i],e)})}return{add:function(e,n){(e.indexOf(",")>-1?e.toLowerCase().split(","):e.toLowerCase().split(" ")).forEach(function(e){var i={fn:n,alt:!1,ctrl:!1,shift:!1};e.split("+").forEach(function(e){switch(e){case"alt":case"ctrl":case"shift":i[e]=!0;break;default:i.charCode=e.charCodeAt(0),i.keyCode=C[e]||e.toUpperCase().charCodeAt(0)}});var r=(i.ctrl?"ctrl":"")+","+(i.alt?"alt":"")+","+(i.shift?"shift":"")+","+i.keyCode;t[r]=i})}}},special:v,stop:function(e){return window.document.all&&(e.keyCode=0),e.preventDefault&&(e.preventDefault(),e.stopPropagation()),this},trigger:function(e,t,n){var i;(i=t instanceof Event?t:f(t,n))._args=n;var r=e.dispatchEvent||e.trigger;return r?r.call(e,i):console.warn("The evented parameter is not a eventable object"),this}}),e.attach("domx.eventer",P)});
//# sourceMappingURL=sourcemaps/eventer.js.map