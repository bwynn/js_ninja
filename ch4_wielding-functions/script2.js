// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// declares a recursive chirping function that calls itself
// by name until it determines that it's done
function chirp(n) {
  return n > 1 ? chirp(n-1) + "-chirp" : "chirp";
}

// asserts that a ninja can chirp as planned
assert(chirp(3) == "chirp-chirp-chirp",
                    "Calling the named function comes naturally.");
