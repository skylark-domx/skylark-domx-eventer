define([
	"skylark-langx",
	"./eventer",
    "./compatible"
],function(langx,eventer,compatible){
    var  ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/;

    function createProxy(src, props) {
        var key,
            proxy = {
                originalEvent: src
            };
        for (key in src) {
            if (key !== "keyIdentifier" && !ignoreProperties.test(key) && src[key] !== undefined) {
                proxy[key] = src[key];
            }
        }
        if (props) {
            langx.mixin(proxy, props);
        }
        return compatible(proxy, src);
    }

    return eventer.proxy = createProxy;
});