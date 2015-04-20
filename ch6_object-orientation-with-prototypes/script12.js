// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a new method in the Object prototype
Object.prototype.keys = function() {
  var keys = [];
  for (var p in this) keys.push(p);
  return keys;
};

// creates an object to serve as a test subject
var obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length == 3,
      "There are three properties in the object");
