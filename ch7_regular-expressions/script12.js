// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function trim(str) {
  return str.replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
}

assert(trim(" #id div.class ") == "#id div.class",
        "Extra whitespace trimmed from a selector string");
