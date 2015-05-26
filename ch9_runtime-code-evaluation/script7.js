// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines the source JSON that represents an object with a single
// property
var json = '{"name":"Ninja"}';

// converts the JSON to a js object
var object = eval("(" + json + ")");

assert(object.name === "Ninja",
      "My name is Ninja!");
