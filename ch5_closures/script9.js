// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// adds the bind() method to all functions via it's prototype
// thats something we'll see in the next chapter
Function.prototype.bind = function() {
  var fn = this, args = Array.prototype.slice.call(arguments),
  object = args.shift();

  return function() {
    return fn.apply(object,
    args.concat(Array.prototype.slice.call(arguments)));
  };
};

var myObject = {};
function myFunction() {
  return this == myObject;
}

assert ( !myFunction(), "Context is not yet set");

var aFunction = myFunction.bind(myObject);
assert( aFunction(), "Context is properly set");
