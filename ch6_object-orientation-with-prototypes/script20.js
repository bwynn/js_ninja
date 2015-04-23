// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function User(first, last) {
  // fixes things up if we determine that we were called incorrectly
  // by calling ourselves in the correct manner
  if(!(this instanceof arguments.callee)) {
    return new User(first,last);
  }
  this.name = first + ' ' + last;
}

var name = "Rukia";

// calls the constructor incorrectly
var user = User("Ichigo", "Kurosaki");

assert(name == "Rukia", "Name was set to Rukia");
assert(user instanceof User, "User instantiated");
assert(user.name == 'Ichigo Kurosaki', 'User name was correctly assigned');
