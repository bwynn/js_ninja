// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// We're going to store a cache of values in property values
// here we check to see if we've already created it, and do so if not
Function.prototype.memoized = function(key) {
  this._values = this._values || {};
  // when we get called with a key, we check to see if we have a
  // cached value for it. if so, we return it. if not, we call the
  // function and store it's value for next time
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
}

// we'll compute prime numbers as a test
function isPrime(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

assert(isPrime.memoized(5), "The function works, 5 is prime.");
assert(isPrime._values[5], "the answer has been cached.");
