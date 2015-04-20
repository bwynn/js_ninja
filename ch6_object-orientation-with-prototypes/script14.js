// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a new method on the Number native prototype
Number.prototype.add = function(num) {
  return this + num;
}

// tests the method using a variable
var n = 5;
assert(n.add(3) == 8,
        "It works when the number is in a variable.");

assert((5).add(3) == 8,
        "Also works if a number is wrapped in a parenthesis.");

assert(5.add(3) == 8,
        "What about a simple literal?");
