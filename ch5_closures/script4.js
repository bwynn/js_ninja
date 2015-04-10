// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines the constructor for a Ninja
function Ninja() {

  // declares a variable inside the function (constructor).
  // because the scope of the variable is limited to
  // inside the constructor, it's a 'private' variable.
  // we'll use it to count how many times the ninja has feinted
  var feints = 0;

  // creates an accessor method for the feints counter. As the
  // variable is not accessible to code outside the constructor
  // this is a common way to give read-only access to the value
  this.getFeints = function() {
    return feints;
  };

  // declares the increment method for the value. because the value
  // is private, no one can screw it up behind our backs, they are
  // limited to the access that we give them via methods
  this.feint = function() {
    feints++;
  };
}

// now for testing, first we construct an instance of Ninja
var ninja = new Ninja();

// calls the feint() method, which increments the count of the number
// of times that our ninja has feinted
ninja.feint();

// verifies that we can't get at the variable directly
assert(ninja.getFeints() == 1,
        "We're able to access the internal feint count.");

// shows that we've caused the value to increment to 1, even though
// we had no direct access to it. we can affect the feints value because,
// even though the constructor in which it's declared has finished executing
// and gone out of scope, the feints variable is bound to the closure
// (think protective bubble) created by the declaration of the feint()
// method, and is available to that method
assert(ninja.feints === undefined,
      "And the private data is inaccessible to us");
