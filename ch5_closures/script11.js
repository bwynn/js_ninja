// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

Function.prototype.curry = function() {
  // remembers the function and 'prefill' arguments in variables that
  // will be captured in the closure
  var fn = this,
      args = Array.prototype.slice.call(arguments);
  // creates the anonymous curried function
  return function() {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments)));
  };
};
