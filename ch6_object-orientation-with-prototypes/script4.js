// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a constructor that creates a Ninja with a single boolean prop
function Ninja() {
  this.swung = true;
}

// instantiates an instance of Ninja by calling the constructor function
// via the new operator
var ninja = new Ninja();

// adds a method to the prototype after the object has been created
Ninja.prototype.swingSword = function() {
  return this.swung;
}

// tests if the method exists in the object
assert(ninja.swingSword(), "Method exists, even out of order");
