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
