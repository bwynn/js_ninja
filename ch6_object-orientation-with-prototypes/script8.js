// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a dancing Person via a constructor and it's prototype
function Person() {}
Person.prototype.dance = function() {
  return true;
};

// defines a Ninja
function Ninja(){}

// attempts to make a Ninja a dancing Person by copying the dance
// method from the Person prototype
Ninja.prototype = { dance: Person.prototype.dance };

var ninja = new Ninja();
assert(ninja instanceof Ninja,
        "ninja receives functionality from the Ninja prototype");
assert(ninja instanceof Person,
        "... and the Person prototype");
assert(ninja instanceof Object,
        "... and the Object prototype");
