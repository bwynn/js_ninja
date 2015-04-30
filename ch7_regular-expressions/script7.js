// setup assert testing function
function assert(value, desc) {
  var li = document.createElement('li');
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";

// uses capture backreference
var pattern = /<(\w*)([^>]*)>(.*?)<\/\1>/g;

// runs the pattern on the test string
var match = pattern.exec(html);

// tests various captures that are captured by the defined pattern
assert(match[0] == "<b class='hello'>Hello</b>",
      "The entire tag, start to finish");
assert(match[1] == "b", "The tag name");
assert(match[2] == " class='hello'", "The tag attributes.");
assert(match[3] == "Hello", "The contents of the tag");

match = pattern.exec(html);

assert(match[0] == "<i>world!</i>",
      "The entire tag, start to finish");
assert(match[1] == "i", "The tag name");
assert(match[2] == "", "the tag attributes");
assert(match[3] == "world!", "the contents of the tag");
