// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// creates a new String function
String.prototype.csv = String.prototype.split.partial(/,\s*/);

// invokes curries function
var results = ("Mugan, Jin, Fuu").csv();

// test results
assert(results[0] == "Mugan" &&
       results[1] == "Jin" &&
       results[2] == "Fuu",
       "The text values were split properly");
