// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function Ninja() {}

var ninja = new Ninja();

// constructs a second ninja from the first
var ninja2 = new ninja.constructor();

// proves the new objects Ninja-ness
assert(ninja2 instanceof Ninja, "It's a Ninja!");

// they arent the same object but two distinct instances
assert(ninja !== ninja2, "But not the same Ninja!");
