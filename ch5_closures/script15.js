// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// Define a generic wrapping funciton, taking as parameters an object
// whose method is to be wrapped, name of object method to be wrapped,
// and function to be executed in place of original method

function wrap(object, method, wrapper) {
  // remembers original function so that we can later reference it via
  // a closure should we desire
  var fn = object[method];

  // wraps original function by creating a new function that calls
  // function passed as wrapper. within new function, wrapper function
  // is called with apply(), forcing function context to object and
  // passing as arguments to the orignal method(using bind()) to force
  // its function context to object and original arguments.
  return object[method] = function() {
    return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments)));
  };
}

// remember: uses prototype mechanism for browser detection, this code
// is from prototype, so it's eating its own dog food -- to determine
// if the function needs to be wrapped.
if (Prototype.Browser.Opera) {
  // uses wrap() function to substitute new functionality if
  // attr argument is 'title' and uses original function if not
  wrap(Element.Methods, "readAttribute",
  function(original, elem, attr) {
    return attr == 'title' ?
    elem.title :
    original(elem, attr);
  });
}
