// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
// matches using a local regex
var results = html.match(/<(\/?)(\w+)([^>]*?)>/);

assert(results[0] == "<div class='test'>", "The entire match.");
assert(results[1] == "", "The (missing) slash.");
assert(results[2] == "div", "the tag name.");
assert(results[3] == " class='test'", "the attributes.");

var all = html.match(/<(\/?)(\w+)([^>]*?)>/g);

assert(all[0] == "<div class='test'>", "Opening div tag.");
assert(all[1] == "<b>", "opening b tag");
assert(all[2] == "</b>", "Closing b tag");
assert(all[3] == "<i>", "Opening i tag");
assert(all[4] == "</i>", "closing i tag");
assert(all[5] == "</div>", "Closing div tag");
