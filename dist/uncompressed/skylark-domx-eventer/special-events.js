define([
	"skylark-langx",
    "skylark-domx-browser",
	"./eventer"
],function(langx,browser,eventer){

    var  specialEvents = {};

    if (browser.support.transition) {
        specialEvents.transitionEnd = {
//          handle: function (e) {
//            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
//          },
          bindType: browser.support.transition.end,
          delegateType: browser.support.transition.end
        }        
    }


    return eventer.specialEvents = specialEvents;
});