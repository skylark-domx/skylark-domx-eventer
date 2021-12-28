/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","./eventer","./native-event-ctors","./native-events","./parse","./compatible"],function(e,n,t,r,a,i){var c=function(){return function(n,c){e.isString(n)?c=c||{}:n=(c=n||{}).type||"";var s=a(n);n=s.type,c=e.mixin({bubbles:!0,cancelable:!0},c),s.ns&&(c.namespace=s.ns);var u=new(function(e){var n=r[e];return n||(n=0),t[n]}(n))(n,c);return e.safeMixin(u,c),i(u)}}();return n.create=c});
//# sourceMappingURL=sourcemaps/create.js.map
