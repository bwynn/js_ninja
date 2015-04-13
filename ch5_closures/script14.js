// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

Function.prototype.memoized = function(key) {
  this._values = this._values || {};
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
};

Function.prototype.memoize = function() {
  // brings the context into the closure by assigning it to a variable.
  // otherwise the context is lost, as this is never a part of a closure
  var fn = this;
  // wraps original function in memoization function
  return function() {
    return fn.memoized.apply(fn, arguments);
  };
};

var isPrime = (function(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}).memoize();

// the function is called just like it normally would. the caller doesnt
// need to be aware of the memoization augmentation
assert(isPrime(17), "17 is prime.")
