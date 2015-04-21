// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a User class with a name property
function User(first, last) {
  this.name = first + ' ' + last;
}

// creates a test user, passing in a sample name
// this will result in an error as the constructor is not using the
// new operator, which instantiates a new instance of User.
var user = User("Ichigo", "Kurosaki");

// tests that object was instantiated
assert(user, "User instantiated");

// tests that the constructor properly assigned the name
assert(user.name == "Ichigo Kurosaki",
        "User name correctly assigned");
