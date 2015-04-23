// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function User(first, last){
  this.name = first + ' ' + last;
}

// creates a global variable
var name = "Rukia";

// calls the constructor incorrectly again
var user = User("Ichigo", "Kurosaki");

// tests the global variable
assert(name == "Rukia", "Name was set to Rukia");
