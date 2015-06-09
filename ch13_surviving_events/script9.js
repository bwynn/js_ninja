(function() {
  var isSubmitEventSupported = isEventSupported("submit");

  // defines a utility function that we'll use to check
  // if the passed element is within a form or not
  function isInForm(elem) {
    var parent = elem.parentNode;
    while (parent) {
      if (parent.nodeName.toLowerCase() === "form") {
        return true;
      }
      parent = parent.parentNode;
    }
    return false;
  }

  // predefines a handler for clicks that will check to see if
  // submit event should piggyback on this event and triggers one
  // if so
  function triggerSubmitOnClick(e) {
    var type = e.target.type;
    if((type === "submit" || type === "image") &&
        isInForm(e.target)) {
          return triggerEvent(this, "submit");
        }
  }

  /// predefines a handler for keypresses that will check to see
  // if a submit event
  function triggerSubmitOnKey(e) {
    var type = e.target.type;
    if ((type === "text" || type === "password") &&
        isInForm(e.target) && e.keyCode === 13) {
          return triggerEvent(this, "submit");
        }
  }

  // creates a special function for binding submit events
  this.addSubmit = function(elem, fn) {
    // binds the submit handler normally, and short-circuits
    // the rest of the function if browser support is adequate
    addEvent(elem, "submit", fn);
      if (isSubmitEventSupported) return;

      // but we need to add extra handlers if we're not on a form
      // Only add the handlers for the first handler bound
      if (elem.nodeName.toLowerCase() !== "form" &&
          getData(elem).handlers.submit.length === 1) {
            addEvent(elem, "click", triggerSubmitOnClick);
            addEvent(elem, "keypress", triggerOnSubmitOnKey)
          }
    };

    this.removeSubmit = function(elem, fn) {
      // unbinds the handler normally, and exits if browser
      //support is adequate
      removeEvent(elem, "submit", fn);
      if(isEventSupported("submit")) return;

      var data = getData(elem);

      // if not a form and is the last handler to be unbound,
      // removes the piggybacking handlers
      if(elem.nodeName.toLowerCase() !== "form" &&
        !data || !data.events || !data.events.submit) {
          removeEvent(elem, "click", triggerSubmitOnClick);
          removeEvent(elem, "keypress", triggerSubmitOnKey);
        }
    };
})();
