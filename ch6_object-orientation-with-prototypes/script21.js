// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates a Person class as a subclass of Object by using a subclass()
// method that we'll end up implementing
var Person = Object.subClass({
  init: function(isDancing) {
    this.dancing = isDancing;
  },
  dance: function() {
    return this.dancing;
  }
});

// create the Ninja class by subclassing Person
var Ninja = Person.subClass({
  init: function() {
    this._super(false);
  },
  dance: function() {
    return this.super();
  },
  swingSword: function() {
    return true;
  }
});

// tests the Person class by creating an instance and seeing if it dances
var person = new Person(true);
assert(person.dance(), "The person is dancing.");

// tests the Ninja class by creating an instance and checking that
// it has both the swinging method and the inherited dancing method
var ninja = new Ninja();
assert(ninja.swingSword(), "The sword is swinging");
assert(!ninja.dance(), "The ninja is not dancing");

assert(person instanceof Person, "Person is a person.");
assert(ninja instanceof Ninja && ninja instanceof Person,
        "Ninja is a Ninja and a Person.");
