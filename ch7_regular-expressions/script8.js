// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// uses a passive subexpression
var pattern = /((?:ninja-)+)sword/;

var ninjas = "ninja-ninja-sword".match(pattern);

assert(ninjas.length == 2, "Only one capture was returned.");
assert(ninjas[1] == "ninja-ninja-", "Matched both words, without any extra capture");
