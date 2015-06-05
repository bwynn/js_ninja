// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// checks for the DOM model
if (document.addEventListener) {
  // creates a bind function using DOM model
  this.addEvent = function(elem, type, fn) {
    elem.addEventListener(type, fn, false);
    return fn;
  };

  // creates an unbind funciton using DOM model
  this.removeEvent = function(elem, type, fn) {
    elem.removeEventListener(type, fn, false);
  };
}
// checks for IE model
else if (document.attachEvent) {
  // creates a bind function using IE model
  this.addEvent = function(elem, type, fn) {
    var bound = function() {
      return fn.apply(elem, arguments);
    };
    elem.attachEvent("on" + type, bound);
    return bound;
  };
  // creates an unbind function using IE model
  this.removeEvent = function (elem, type, fn) {
    elem.detachEvent("on" + type, fn);
  };
}

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

(function() {
  // establishes scoped storage
  var cache = {},
      guidCounter = 1,
      expando = "data" + (new Date).getTime();

  // defines the getData() function
  this.getData = function(elem) {
    var guid = elem[expando];
    if (!guid) {
      guid = elem[expando] = guidCounter++;
      cache[guid] = {};
    }
    return cache[guid];
  };

  // defines the removeData() function
  this.removeData = function(elem) {
    var guid = elem[expando];
    if (!guid) return;
    delete cache[guid];
    try {
      delete elem[expando];
    }
    catch (e) {
      if (elem.removeAttribute) {
        elem.removeAttribute(expando);
      }
    }
  };
})();

(function() {
  var nextGuid = 1;

  this.addEvent = function (elem, type, fn) {
    // gets the associated data block
    var data = getData(elem);

    // creates handler storage
    if(!data.handlers) data.handlers = {};

    // creates array by type
    if (!data.handlers[type])
    data.handlers[type] = [];

    // marks instrumented functions
    if(!fn.guid) fn.guid = nextGuid++;

    // adds handler to list
    data.handlers[type].push(fn);

    // creates uber-handler (dispatcher)
    if(!data.dispatcher) {
      data.disabled = false;
      data.dispatcher = function(event) {

        if (data.disabled) return;
        event = fixEvent(event);

        // calls registered handlers
        var handlers = data.handlers[event.type];
        if (handlers) {
          for (var n = 0; n < handlers.length; n++) {
            handlers[n].call(elem, event);
          }
        }
      };
    }

    // registers dispatcher
    if (data.handlers[type].length == 1) {
      if (document.addEventListener) {
        elem.addEventListener(type, data.dispatcher, false);
      }
      else if (document.attachEvent) {
        elem.attachEvent("on" + type, data.dispatcher);
      }
    }
  };
});

function tidyUp(elem, type) {
  //detects empty objects
  function isEmpty(object) {
    for (var prop in object) {
      return false;
    }
    return true;
  }

  var data = getData(elem);

  // checks for type handlers
  if (data.handlers[type].length === 0) {
    delete data.handlers[type];

    if (document.removeEventListener) {
      elem.removeEventListener(type, data.dispatcher, false);
    }
    else if (document.detachEvent) {
      elem.detachEvent("on" + type, data.dispatcher);
    }
  }

  // checks for any handlers
  if (isEmpty(data.handlers)) {
    delete data.handlers;
    delete data.dispatcher;
  }

  // checks if data is needed at all
  if (isEmpty(data)) {
    removeData(elem);
  }
}

// declares the function
this.removeEvent = function(elem, type, fn) {
  // fetches the associated element data
  var data = getData(elem);

  // short-circuits if there's nothing to do
  if (!data.handlers) return;

  // sets up utility function
  var removeType = function(t) {
    data.handlers[t] = [];
    tidyUp(elem,t);
  };

  // removes all bound handlers
  if (!type) {
    for (var t in data.handlers) removeType(t);
    return;
  }

  // finds all handlers for a type
  var handlers = data.handlers[type];
  if (!handlers) return;

  // removes all handlers for a type
  if (!fn) {
    removeType(type);
    return;
  }

  // removes one bound handler
  if (fn.guid) {
    for (var n = 0; n < handlers.length; n++) {
      if (handlers[n].guid === fn.guid) {
        handlers.splice(n--, 1);
      }
    }
  }
  tidyUp(elem, type);
};

// binds the load handler
addEvent(window, "load", function() {
  // collects the test subjects
  var subjects = document.getElementsByTagName("div");

  for (var i = 0; i < subjects.length; i++) (function (elem) {
    // binds mouse events
    addEvent(elem, "mouseover", function handler(e) {
      this.style.backgroundColor = "red";
    });

    //binds click events
    addEvent(elem, "click", function handler(e) {
      this.style.backgroundColor = "green";
      removeEvent(elem, "click", handler);
    });
  })(subjects[i]);
});
