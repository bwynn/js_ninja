// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a function that does nothing and returns nothing
function Ninja() {}

// adds method to the prototype of the function
Ninja.prototype.swingSword = function() {
  return true;
}

// calls the function as a function. Testing confirms that nothing
// at all seems to happen
var ninja1 = Ninja();
assert(ninja1 === undefined, "No instance of Ninja created.");

// calls the function as a constructor. testing confirms that not only
// is the new obejct instance created, it possesses the method from
// the prototype of the function
var ninja2 = new Ninja();
assert(ninja2 && ninja2.swingSword(),
      "Instance exists and method is callable.");
