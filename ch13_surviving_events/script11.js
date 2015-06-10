(function() {
  // starts off assuming that we're not ready
  var isReady = false,
      contentLoadedHandler;

  // defines a function that triggers the ready handler only once;
  // subsequent calls will do nothing
  function ready() {
    if (!isReady) {
      triggerEvent(document, "ready");
      isReady = true;
    }
  }

  // if the DOM is ready by the time we get here, just fire the handler
  if (document.readyState === "complete") {
    ready();
  }

  // for W3C browsers, creates a handler for DOMContentLoaded event
  // that fires off the ready handler and removes itself
  if (document.addEventListener) {
    contentLoadedHandler = function() {
      document.removeEventListener(
        "DOMContentLoaded", contentLoadedHandler, false);
        ready();
    };

    // establishes the just-created handler for the DOMContentLoaded
    // event
    document.addEventListener(
      "DOMContentLoaded", contentLoadedHandler, false);
  }

  // for the IE model, creates a handler that removes itself
  // and fires the ready handler if the document readyState is complete
  else if (document.attachEvent) {
    contentLoadedHandler = function() {
      if (document.readyState === "complete") {
        document.detachEvent(
          "onreadystatechange", contentLoadedHandler);
          ready();
      }
    };

    // establishes the previous handler for onreadystatechange event.
    // will likely fire late, but it is iframe-safe
    document.attachEvent(
      "onreadystatechange", contentLoadedHandler);

    var toplevel = false;
    try {
      toplevel = window.frameElement == null;
    }
    catch (e) {
    }

    // if not in an iframe, performs scroll check
    if (document.documentElement.doScroll && toplevel) {
      doScrollCheck();
    }
  }

  // defines the scroll check function, which keeps trying to scroll
  // untill success
  function doScrollCheck() {
    if (isReady) return;
    try {
      document.documentElement.doScroll("left");
    }
    catch(error) {
      setTimeout(doScrollCheck, 1);
      return;
    }
    ready();
  }
})();
