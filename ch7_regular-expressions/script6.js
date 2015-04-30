// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";

var tag = /<(\/?)(\w+)([^>]*?)>/g, match;
var num = 0;

while ((match = tag.exec(html)) !== null) {
  assert(match.length == 4,
        "Every match finds each tag and 3 captures");
  num++;
}

assert(num == 6, "3 opening and 3 closing tags found");
