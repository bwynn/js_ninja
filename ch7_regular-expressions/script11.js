// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// trims a string without looping
function trim(str) {
  return (str || "").replace(/^\s+|\s+$/g, "");
}

assert(trim(" #id div.class ") == "#id div.class",
      "Extra whitespace trimmed from a selector string.");
