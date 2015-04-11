// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// this essentially creates a dynamic framework for a function before invoking,
// allowing the function to work around of undefined arguments
Function.prototype.partial = function() {
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function() {
    var arg = 0;
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++];
      }
    }
    return fn.apply(this, args);
  };
};

var delay = setTimeout.partial(undefined, 10);

delay(function() {
  assert(true, "A call to this function will be delayed 10ms.")
});

var bindClick = document.body.addEventListener.partial('click', undefined, false);

bindClick(function() {
  assert(true, "Click event bound via curried function.");
});
