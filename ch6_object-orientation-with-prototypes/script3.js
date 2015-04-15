// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function Ninja() {
  // creates an instance variable that holds a boolean value
  // initialized to false
  this.swung = false;

  // creates an instance method that returns thhe inverse of the
  // swung instance variable value
  this.swingSword = function() {
    return !this.swung;
  };
}

// defines a prototype method with the same name as the instance
// method. which will take precedence?
Ninja.prototype.swingSword = function() {
  return this.swung;
};

// constructs a ninja instance for testing and asserts that the instance
// method will override prototype method of the same name.
var ninja = new Ninja();
assert(ninja.swingSword(),
        "Called the instance method, not the prototype methhod.");
