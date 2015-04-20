// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function Person(){}

Person.prototype.dance = function(){};

function Ninja(){}

// makes a ninja a person by making the ninja prototype an instance of
// person
Ninja.prototype = new Person();

var ninja = new Ninja();

assert(ninja instanceof Ninja,
  "ninja receives functionality from the Ninja prototype.");
assert(ninja instanceof Person, ".. and the Person prototype");
assert(ninja instanceof Object, "... and the Object prototype.");
assert(typeof ninja.dance == "function", ".. and can dance!");
