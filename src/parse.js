define([],function(){
    function parse(event) {
        if (event) {
            var segs = ("" + event).split(".");
            return {
                type: segs[0],
                ns: segs.slice(1).sort().join(" ")
            };
        } else {
            return {
                type : null,
                ns : null
            }
        }
    }

    return parse;	
})