// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

// defines a test subject
var html = "<b>Hello</b>\n<i>world!</i>";

// shows that newlines aren't matched
assert(/.*/.exec(html)[0] === "<b>Hello</b>",
      "A normal capture doesn't handle endlines.");

// matches all using whitespace matching
assert(/[\S\s]*/.exec(html)[0] === "<b>Hello</b>\n<i>world!</i>",
      "Matching everything within the character set");

// matches all using alteration
assert(/(?:.|\s)*/.exec(html) === "<b>Hello</b>\n<i>world!</i>",
      "Using a non-capturing group to match everything");
