// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

function trim(str) {
  var str = str.replace(/^\s\s*/, ""),
    ws = /\s/,
    i = str.length;

  while (ws.test(str.charAt(--i)));
  return str.slice(0, i+1);
}

assert(trim(" #id div.class ") == "#id div.class",
            "Extra whitespace trimmed from a selector string");
