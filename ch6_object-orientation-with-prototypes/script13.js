// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

Object.prototype.keys = function() {
  var keys = [];
  for (var i in this)
  // ignores prototyped properties by using hasOwnProperty() to skip over
  // properties from the prototype
  if (this.hasOwnProperty(i)) keys.push(i);
  return keys;
};

var obj = { a: 1, b: 2, c: 3 };

assert(obj.keys().length == 3,
      "THere are three properties in this object");
