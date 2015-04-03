// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function getElements(name) {
  if (!getElements.cache) getElements.cache = {};
  return getElements.cache[name] =
  getElements.cache[name] ||
  document.getElementsByTagName(name);
}
