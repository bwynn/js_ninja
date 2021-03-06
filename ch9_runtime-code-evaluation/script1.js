// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// tests a simple expression
assert(eval("5 + 5") === 10,
      "5 and 5 is 10!");

// tests a valueless evaluation
assert(eval("var ninja = 5;") === undefined,
      "No value was returned");

// verifies the side effect
assert(ninja === 5, "The variable ninja was created");

// tests evaluation scope
(function() {
  eval("var ninja = 6;");
  assert(ninja === 6,
        "evaluated within the current scope.");
})();

// tests for scope 'leakage'
assert(window.ninja === 5,
      "the global scope was unaffected");

assert(ninja === 5,
      "the global scope was unaffected");
