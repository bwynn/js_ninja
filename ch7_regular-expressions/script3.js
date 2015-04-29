// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}


function findClassInElements(className, type) {
  // collects elements by type
  var elems = document.getElementsByTagName(type || "*");

  // compiles a regex used the passed class name
  var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

  var results = [];

  for (var i = 0, length = elems.length; i < length; i++)
  // tests for regex matches
  if (regex.test(elems[i].className)) {
    results.push(elems[i]);
  }
  return results;
}

assert(findClassInElements("ninja", "div").length == 2,
      "The right amount of div ninjas were found.");
assert(findClassInElements("ninja", "span").length == 1,
      "The right amount of span ninjas was found.");
assert(findClassInElements("ninja").length == 3,
      "The right amount of ninjas was found.");
