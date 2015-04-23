// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function Test() {
  return this instanceof arguments.callee;
}

assert(!Test(), "We didn't instantiate, so it returns false");
assert(new Test(), "We did instantiate, returning true!");
