function fixEvent(event) {
  // predefines often-used functions
  function returnTrue() {return true;}
  function returnFalse() {return false;}

  // tests if fixing up is needed
  if (!event || !event.stopPropagation) {
    var old = event || window.event;

    // clone the old object so that we can modify the values
    event = {};

    // clones the existing properties
    for (var prop in old) {
      event[prop] = old[prop];
    }

    // the event occurred on this element
    if (!event.target) {
      event.target = event.srcElement || document;
    }

    // handle which other element the event is related to
    event.relatedTarget = event.fromElement === event.target ?
      event.toElement :
      event.fromElement;

    // stop the default browser action
    event.preventDefault = function() {
      event.returnValue = false;
      event.isDefaultPrevented = returnTrue;
    };

    event.isDefaultPrevented = returnFalse;

    // stop the event from bubbling
    event.stopPropagation = function() {
      event.cancelBubble = true;
      event.isPropagationStopped = returnTrue;
    };

    event.isPropagationStopped = returnFalse;

    // stop the event from bubbling and executing other handlers
    event.stopImmediatePropagation = function() {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    };

    event.isImmediatePropagationStopped = returnFalse;

    // handle mouse position
    if (event.clientX != null) {
      var doc = document.documentElement, body = document.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // handle key presses
    event.which = event.charCode || event.keyCode;

    // fix button for mouse clicks:
    // 0 == left; 1 == middle; 2 == right
    if (event.button != null) {
      event.button = (event.button & 1 ? 0 :
        (event.button & 4 ? 1 :
          (event.button & 2 ? 2 : 0)));
    }
  }
  // returns fixed up instance
  return event;
}
