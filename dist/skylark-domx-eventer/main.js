/**
 * skylark-domx-eventer - The skylark eventer library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx","skylark-domx-velm","skylark-domx-query","./eventer","./clear","./compatible","./event-bindings","./events-handler","./find-handler","./focused","./is-native-event","./keys","./native-event-ctors","./native-events","./off","./on","./one","./proxy","./ready","./resized","./shortcuts","./special-events","./stop","./trigger"],function(e,n,r,t){e.each(t.NativeEvents,function(e){t[e]=function(n,r,a,i){return arguments.length>1?t.on(n,e,r,a,i):("focus"==e?n.focus&&n.focus():"blur"==e?n.blur&&n.blur():"click"==e?n.click&&n.click():t.trigger(n,e),this)}});var a=["off","on","one","trigger"];return e.each(t.NativeEvents,function(e){a.push(e)}),n.delegate(a,t),e.each(a,function(e,n){r.fn[n]=r.wraps.wrapper_every_act(t[n],t)}),r.ready=t.ready,t});
//# sourceMappingURL=sourcemaps/main.js.map
