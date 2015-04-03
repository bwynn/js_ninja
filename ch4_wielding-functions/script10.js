// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates the cache
function isPrime(value) {
  if (!isPrime.answers) isPrime.answers = {};
  // checks for cached values
  if (isPrime.answers[value] != null) {
    return isPrime.answers[value];
  }
  var prime = value != 1; // 1 can never be prime
  for (var i = 2; i < value; i++) {
    if(value % i == 0) {
      prime = false;
      break;
    }
  }
  // stores the computed value
  return isPrime.answers[value] = prime;
}
// tests that it all works
assert(isPrime(5), '5 is prime!');
assert(isPrime.answers[5], 'the answer was cached!');
