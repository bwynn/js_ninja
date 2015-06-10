(function() {
  // tests if the browser natively supports mouseenter (and hence,
  // mouseleave) events
  if (isEventSupported("mouseenter")) {
    // adds handler that invoke the handler for browsers that support
    // the events
    this.hover = function (elem, fn) {
      addEvent(elem, "mouseenter", function() {
        fn.call(elem, "mouseenter");
      });

      addEvent(elem, "mouseleave", function() {
        fn.call(elem, "mouseleave");
      });
    };
  }
  else {
    // in nonsupporting browsers, handle mosueover and mouseout using
    // a handler that detects whether the handler should fire or not
    this.hover = function (elem, fn) {
      addEvent(elem, "mouseover", function(e) {
        withinElement(this, e, "mouseenter", fn);
      });

      addEvent(elem, "mouseout", function(e) {
        withinElement(this, e, "mouseleave", fn);
      });
    };
  }

  // internal handler that fires the original handler to mimic
  // the nonstandard behavior
  function withinElement(elem, event, type, handle) {
    // gets the element we're entering from, or exiting to
    var parent = event.relatedTarget;
    // traverses upward until it hits the top of the DOM or the
    // hovered element
    while (parent && parent != elem) {
      try {
        parent = parent.parentNode;
      }
      catch(e) {
        break;
      }
    }
    if (parent != elem) {
      handle.call(elem, type);
    }
  }
})();
