// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// implements the merge function
function merge(root) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }
  return root;
}

// calls the implemented function
var merged = merge(
  {name: "Batou"},
  {city: "Niihama"}
);

// tests that it did the right things
assert(merged.name == 'Batou',
              "The original name is intact.");
assert(merged.city == 'Niihama', "And the city has been copied over.");
