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

// establishes a load handler
addEvent(window, "load", function() {
  // fetches test elements
  var elems = document.getElementsByTagName("div");

  // establishes test handlers
  for (var i = 0; i < elems.length; i++) (function(elem) {
    var handler = addEvent(elem, "click", function () {
      this.style.backgroundColor =
        this.style.backgroundColor=='' ? 'green' : '';
      // unbinds handlers
      removeEvent(elem, "click", handler);
    });
  })(elems[i]);
});
